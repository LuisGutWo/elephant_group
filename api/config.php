<?php
/**
 * Configuración de Email para cPanel
 *
 * IMPORTANTE: Configura estas constantes con tus credenciales SMTP de cPanel
 * NO subas este archivo a GitHub con credenciales reales
 */

// Configuración SMTP para cPanel
define( 'SMTP_HOST', getenv('SMTP_HOST') ?: 'mail.elephantgroup.cl');          // Servidor SMTP de tu dominio
define('SMTP_PORT', getenv('SMTP_PORT') ?: 587);                              // Puerto (465 para SSL, 587 para TLS)
define('SMTP_USER', getenv('SMTP_USER') ?: 'ventas@elephantgroup.cl');        // Tu email de cPanel
define('SMTP_PASS', getenv('SMTP_PASS'));                // Contraseña del correo de cPanel
define('CONTACT_RECIPIENT', getenv('CONTACT_RECIPIENT') ?: 'ventas@elephantgroup.cl'); // Email de destino
define('RECAPTCHA_SECRET_KEY', getenv('RECAPTCHA_SECRET_KEY')); // Secreto reCAPTCHA desde entorno
define('ALLOWED_ORIGIN', getenv('ALLOWED_ORIGIN') ?: ''); // Ej: https://landingclientes.elephantgroup.cl

// Validación básica de configuración
if (empty(SMTP_HOST) || empty(SMTP_USER) || empty(SMTP_PASS)) {
    error_log('⚠️ ADVERTENCIA: Archivo config.php no configurado. Actualiza las credenciales SMTP de cPanel.');
}

if (empty(RECAPTCHA_SECRET_KEY)) {
    error_log('⚠️ ADVERTENCIA: RECAPTCHA_SECRET_KEY no configurada en entorno.');
}
?>
