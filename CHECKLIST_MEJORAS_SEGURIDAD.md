# Checklist de Seguridad y Mejora para elephant_group_website

## 1. Seguridad de datos sensibles

- [x] Revisar que las variables de entorno (SMTP, etc.) no estén expuestas en el repositorio ni archivos públicos.
- [x] Forzar HTTPS en todo el sitio (redirección en .htaccess o configuración del servidor).
- [x] Agregar cabeceras de seguridad HTTP:
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
- [x] Implementar CSRF tokens en formularios sensibles.
- [x] No almacenar datos sensibles en localStorage/sessionStorage.

## 3. Seguridad en el servidor

- [x] Mantener actualizado Node.js, PHP y todas las dependencias. Estado actual del repo: `npm audit` sin vulnerabilidades y build OK tras fijar `postcss` a `^8.5.10` por override.
- [x] Revisar releases de Next.js y re-ejecutar auditoría en cada ciclo de actualización.
- [x] Desactivar visualización de errores en producción (display_errors = Off en PHP).
- [ ] Restringir permisos de archivos y carpetas (644 para archivos, 755 para carpetas). Mitigación parcial aplicada: bloqueo de acceso directo a `public/api/config.php` y `public/api/php_errors.log` mediante `public/api/.htaccess`.
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
- [x] Realizar pruebas de carga para estimar capacidad máxima de visitas. Prueba local en `http://localhost:3000/` con 120 solicitudes y 20 concurrentes: 0 fallos, p95 ~94 ms, promedio ~39 ms.
- [ ] Monitorear uso de recursos del servidor y escalar el plan si es necesario.

## 6. Buenas prácticas adicionales

- [ ] Incluir política de privacidad y términos de uso claros.
- [ ] Agregar archivo robots.txt y mantener sitemap.xml actualizado.
- [ ] Mantener el repositorio privado si contiene scripts/configuraciones sensibles.
- [x] Realizar revisiones periódicas de seguridad y dependencias (npm audit, etc.).
- [x] Política de releases: bloquear despliegues solo por vulnerabilidades high/critical; documentar y revisar las moderate.

---

Marca cada ítem a medida que lo completes. Si necesitas ayuda para implementar algún punto, consúltame y te guío paso a paso.
