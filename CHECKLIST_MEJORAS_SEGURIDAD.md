# Checklist de Seguridad y Mejora para elephant_group_website

## 1. Seguridad de datos sensibles

- [x] Revisar que las variables de entorno (SMTP, etc.) no estén expuestas en el repositorio ni archivos públicos.
- [x] Forzar HTTPS en todo el sitio (redirección en .htaccess o configuración del servidor).
- [ ] Agregar cabeceras de seguridad HTTP:
  - [x] Content-Security-Policy
  - [x] X-Frame-Options
  - [x] X-XSS-Protection
  - [x] Strict-Transport-Security
  - [x] Referrer-Policy
  - [x] Validar y sanitizar todos los datos recibidos por formularios (frontend y backend).
  - [x] Limitar tamaño y tipo de archivos en uploads.
  - [x] Implementar reCAPTCHA o similar en formularios.

## 2. Seguridad de sesión y cookies

- [ ] Usar cookies con flags HttpOnly y Secure si se implementa autenticación.
- [ ] Implementar CSRF tokens en formularios sensibles.
- [ ] No almacenar datos sensibles en localStorage/sessionStorage.

## 3. Seguridad en el servidor

- [ ] Mantener actualizado Node.js, PHP y todas las dependencias.
- [ ] Desactivar visualización de errores en producción (display_errors = Off en PHP).
- [ ] Restringir permisos de archivos y carpetas (644 para archivos, 755 para carpetas).
- [ ] Configurar backups automáticos y regulares.
- [ ] Cambiar contraseñas de cPanel, FTP y correo periódicamente.

## 4. Protección contra ataques comunes

- [ ] Mantener activa y revisada la configuración de ModSecurity.
- [ ] Implementar firewall de aplicaciones web (WAF) si el hosting lo permite.
- [ ] Monitorear logs de acceso y errores para detectar patrones sospechosos.

## 5. Rendimiento y escalabilidad

- [ ] Activar compresión GZIP/Brotli en el servidor.
- [ ] Habilitar cacheo de assets estáticos (expiración larga en .htaccess o servidor).
- [ ] Optimizar imágenes (usar WebP y tamaños adaptativos).
- [ ] Considerar uso de CDN para assets estáticos.
- [ ] Realizar pruebas de carga para estimar capacidad máxima de visitas.
- [ ] Monitorear uso de recursos del servidor y escalar el plan si es necesario.

## 6. Buenas prácticas adicionales

- [ ] Incluir política de privacidad y términos de uso claros.
- [ ] Agregar archivo robots.txt y mantener sitemap.xml actualizado.
- [ ] Mantener el repositorio privado si contiene scripts/configuraciones sensibles.
- [ ] Realizar revisiones periódicas de seguridad y dependencias (npm audit, etc.).

---

Marca cada ítem a medida que lo completes. Si necesitas ayuda para implementar algún punto, consúltame y te guío paso a paso.
