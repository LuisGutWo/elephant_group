<?php
/**
 * API de envío de correos - Formulario Simple
 * Compatible con cPanel y hosting PHP tradicional
 */

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/../../logs/php_errors.log');

// Headers CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

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

// Cargar configuración
require_once __DIR__ . '/config.php';

// Obtener datos del POST
$input = file_get_contents('php://input');
$data = json_decode($input, true);

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
        'message' => 'Error enviando el mensaje. Por favor, intente nuevamente.',
        'error' => $e->getMessage()
    ]);
}
?>
