<?php
/**
 * API de envío de correos - Formulario Simple
 * Compatible con cPanel y hosting PHP tradicional
 */

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/../../logs/php_errors.log');

// Cargar configuración
require_once __DIR__ . '/config.php';

// CORS restringido por origen configurado
$requestOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigin = ALLOWED_ORIGIN;
$appEnv = getenv('APP_ENV') ?: (getenv('NODE_ENV') ?: 'production');
$isProduction = $appEnv === 'production';
$isOriginAllowed = !empty($allowedOrigin) && !empty($requestOrigin) && $requestOrigin === $allowedOrigin;
$isWildcardDev = !$isProduction && empty($allowedOrigin);
$isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
  || (($_SERVER['SERVER_PORT'] ?? '') == 443)
  || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');

$csp = "default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none';";

// Headers CORS
if ($isWildcardDev) {
  header('Access-Control-Allow-Origin: *');
} elseif ($isOriginAllowed) {
  header('Access-Control-Allow-Origin: ' . $allowedOrigin);
  header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
header('Access-Control-Max-Age: 600');
header('Content-Type: application/json; charset=utf-8');
header('Content-Security-Policy: ' . $csp);
header('X-Frame-Options: DENY');
header('Referrer-Policy: no-referrer');
header('Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()');
header('X-Content-Type-Options: nosniff');
if ($isHttps) {
  header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
}

if ($isProduction) {
  if (empty($allowedOrigin)) {
    http_response_code(500);
    echo json_encode(['message' => 'ALLOWED_ORIGIN no configurado en produccion.']);
    exit;
  }

  if (!$isOriginAllowed) {
    http_response_code(403);
    echo json_encode(['message' => 'Origen no permitido.']);
    exit;
  }
}

// Manejar preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
    exit;
}

// Rate limiting básico por IP (20 requests cada 10 minutos, solo POST)
$clientIpForRateLimit = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitKey = hash('sha256', 'send-simple-contact:' . $clientIpForRateLimit);
$rateLimitFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'eg_rl_' . $rateLimitKey . '.json';
$rateLimitWindow = 600;
$rateLimitMaxRequests = 20;
$now = time();
$history = [];

if (file_exists($rateLimitFile)) {
  $rawHistory = @file_get_contents($rateLimitFile);
  $decodedHistory = json_decode($rawHistory ?: '[]', true);
  if (is_array($decodedHistory)) {
    $history = $decodedHistory;
  }
}

$history = array_values(array_filter($history, function ($ts) use ($now, $rateLimitWindow) {
  return is_int($ts) && ($now - $ts) < $rateLimitWindow;
}));

if (count($history) >= $rateLimitMaxRequests) {
  http_response_code(429);
  echo json_encode(['message' => 'Demasiadas solicitudes. Intenta nuevamente en unos minutos.']);
  exit;
}

$history[] = $now;
@file_put_contents($rateLimitFile, json_encode($history), LOCK_EX);

// Obtener datos del POST
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['message' => 'Payload JSON invalido.']);
  exit;
}

// Validar reCAPTCHA
$recaptcha = $data['recaptchaToken'] ?? ($data['recaptcha'] ?? '');
$secret = RECAPTCHA_SECRET_KEY;
$clientIp = $_SERVER['REMOTE_ADDR'] ?? '';

if (empty($secret)) {
  http_response_code(500);
  echo json_encode(['message' => 'RECAPTCHA_SECRET_KEY no configurada.']);
  exit;
}

if (empty($recaptcha)) {
  http_response_code(400);
  echo json_encode(['message' => 'Falta token de reCAPTCHA.']);
  exit;
}

$verifyPayload = http_build_query([
  'secret' => $secret,
  'response' => $recaptcha,
  'remoteip' => $clientIp,
]);

$context = stream_context_create([
  'http' => [
    'method' => 'POST',
    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
    'content' => $verifyPayload,
    'timeout' => 10,
  ],
]);

$recaptchaResponse = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);

if ($recaptchaResponse === false) {
  http_response_code(400);
  echo json_encode(['message' => 'No se pudo verificar reCAPTCHA.']);
  exit;
}

$recaptchaResult = json_decode($recaptchaResponse, true);
if (!is_array($recaptchaResult) || empty($recaptchaResult['success'])) {
  http_response_code(400);
  echo json_encode(['message' => 'reCAPTCHA invalido']);
  exit;
}

error_log("📨 API /send-simple-contact llamado");

// Validar datos requeridos

$name = isset($data['name']) ? htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8') : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8') : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['message' => 'Todos los campos son requeridos.']);
    exit;
}

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Email inválido.']);
    exit;
}

// Verificar configuración SMTP
if (empty(SMTP_HOST) || empty(SMTP_USER) || empty(SMTP_PASS)) {
    error_log("❌ Variables de entorno SMTP no configuradas");
    http_response_code(200);
    echo json_encode([
        'message' => 'Mensaje recibido correctamente. (Email no configurado)',
        'warning' => 'SMTP not configured'
    ]);
    exit;
}

// Usar PHPMailer
$phpMailerFiles = [
  __DIR__ . '/PHPMailer/PHPMailer.php',
  __DIR__ . '/PHPMailer/SMTP.php',
  __DIR__ . '/PHPMailer/Exception.php',
];

foreach ($phpMailerFiles as $phpMailerFile) {
  if (!file_exists($phpMailerFile)) {
    error_log("❌ Dependencia faltante: " . $phpMailerFile);
    http_response_code(500);
    echo json_encode([
      'message' => 'Error de configuracion del servidor. Intenta mas tarde.'
    ]);
    exit;
  }
}

require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $mail = new PHPMailer(true);

    // Configuración SMTP
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = SMTP_PORT == 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = SMTP_PORT;
    $mail->CharSet = 'UTF-8';

    // Remitente y destinatario
    $mail->setFrom(SMTP_USER, $name);
    $mail->addAddress(CONTACT_RECIPIENT);
    $mail->addReplyTo($email, $name);

    // Asunto
    $subject = 'Nuevo mensaje de ' . $name;
    $mail->Subject = $subject;

    // Fecha actual
    $currentDate = date('d/m/Y H:i:s');

    // Texto plano
    $textBody = "NUEVO MENSAJE DESDE EL FORMULARIO DE LA WEB\n\n";
    $textBody .= "DATOS DEL CLIENTE:\n";
    $textBody .= "Nombre: $name\n";
    $textBody .= "Email: $email\n\n";
    $textBody .= "MENSAJE:\n$message\n\n";
    $textBody .= "──────────────────────────────────────\n";
    $textBody .= "Enviado desde la web\n";
    $textBody .= "Fecha: $currentDate\n";

    $mail->Body = $textBody;

    // HTML body
    $htmlBody = "<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #25282a; background: #fffbe9; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 1.2rem; box-shadow: 0 6px 32px rgba(201,150,26,0.13), 0 2px 16px rgba(30,30,30,0.08); border: 2px solid #c9961a; }
    .header { background: linear-gradient(90deg, #c9961a 60%, #fffbe9 100%); color: #25282a; padding: 24px 20px; border-radius: 1.2rem 1.2rem 0 0; text-align: center; border-bottom: 2.5px solid #c9961a; }
    .header h2 { margin: 0; font-size: 1.5rem; letter-spacing: 0.02em; }
    .content { background: #fffbe9; padding: 20px; border-radius: 0 0 1.2rem 1.2rem; }
    .section { background: #fff; padding: 18px; margin: 18px 0; border-radius: 0.8rem; border-left: 5px solid #c9961a; box-shadow: 0 2px 8px rgba(201,150,26,0.06); }
    .label { font-weight: bold; color: #c9961a; }
    .value { color: #25282a; margin-bottom: 10px; }
    .message-box { background: #f5f5f5; padding: 15px; border-radius: 0.6rem; white-space: pre-line; border: 1px solid #ececec; }
    .footer { text-align: center; color: #777; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #c9961a; }
    a { color: #c9961a; text-decoration: none; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2 style='margin: 0;'>✉️ $subject</h2>
    </div>
    <div class='content'>
      <div class='section'>
        <h3 style='color: #c9961a; margin-top: 0;'>👤 Datos del Cliente</h3>
        <div class='value'><span class='label'>Nombre:</span> $name</div>
        <div class='value'><span class='label'>Email:</span> <a href='mailto:$email'>$email</a></div>
      </div>
      <div class='section'>
        <h3 style='color: #c9961a; margin-top: 0;'>💬 Mensaje</h3>
        <div class='message-box'>$message</div>
      </div>
      <div class='footer'>
        <p>Enviado desde la web Elephant Group</p>
        <p>$currentDate</p>
      </div>
    </div>
  </div>
</body>
</html>";

    $mail->isHTML(true);
    $mail->AltBody = $textBody;
    $mail->Body = $htmlBody;

    // Enviar email
    error_log("📬 Enviando email a: " . CONTACT_RECIPIENT);
    $mail->send();

    error_log("✅ Email enviado exitosamente");

    http_response_code(200);
    echo json_encode(['message' => 'Mensaje enviado correctamente.']);

} catch (Exception $e) {
    error_log("❌ Error en send-simple-contact: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
    'message' => 'Error enviando el mensaje. Intente nuevamente mas tarde.'
    ]);
}
?>
