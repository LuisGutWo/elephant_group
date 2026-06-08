# Checklist de Cierre y Publicacion en cPanel

## 1. Pre-requisitos locales (antes de subir)

- [x] Ejecutar `npm run lint` sin errores.
- [x] Ejecutar `npm run build` sin errores.
- [x] Confirmar que existe `.env.local.example` actualizado.
- [x] Confirmar que `.env.local` NO se sube al repositorio.

## 2. Variables requeridas en cPanel

Configurar estas variables en el entorno del hosting:

- [ ] `APP_ENV=production`
- [ ] `NEXT_PUBLIC_EMAIL_BACKEND_MODE=next` (si despliegas como app Node.js)
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER`
- [ ] `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- [ ] `RECAPTCHA_SECRET_KEY`
- [ ] `SMTP_HOST`
- [ ] `SMTP_PORT`
- [ ] `SMTP_USER`
- [ ] `SMTP_PASS`
- [ ] `CONTACT_RECIPIENT`
- [ ] `ALLOWED_ORIGIN` (obligatoria solo si usas backend PHP)

Notas de seguridad:

- `ALLOWED_ORIGIN` debe coincidir EXACTAMENTE con el origen real del sitio (ejemplo: `https://landingclientes.elephantgroup.cl`).
- Si `ALLOWED_ORIGIN` no esta definida en produccion, los endpoints PHP devolveran error de configuracion.
- Si desplegas como app Node.js en cPanel, usa `NEXT_PUBLIC_EMAIL_BACKEND_MODE=next` para forzar las rutas API de Next (`/api/send-contact` y `/api/send-simple-contact`).

## 3. Publicacion en cPanel

- [ ] Subir archivos del proyecto al directorio publico del dominio/subdominio.
- [ ] Verificar permisos recomendados (archivos 644, carpetas 755).
- [ ] Confirmar certificado SSL activo y redireccion HTTPS forzada.
- [ ] Verificar que `public/api/config.php` no sea accesible directamente desde navegador.

## 4. Pruebas funcionales post-deploy

### Formulario principal (cotizacion)

- [ ] Abrir pagina de contacto/cotizacion y enviar formulario valido con reCAPTCHA.
- [ ] Confirmar redireccion a WhatsApp.
- [ ] Confirmar envio de correo de respaldo al destinatario configurado.
- [ ] Probar caso con archivo adjunto permitido (PDF/JPG/PNG).
- [ ] Probar caso con archivo grande para verificar rechazo controlado.

### Formulario simple (footer)

- [ ] Enviar nombre + email + mensaje valido con reCAPTCHA.
- [ ] Confirmar recepcion del correo.
- [ ] Validar mensajes de error para campos invalidos.

### Seguridad de APIs

- [ ] Confirmar que peticiones desde origen no permitido devuelven 403.
- [ ] Confirmar que en produccion no hay `Access-Control-Allow-Origin: *`.
- [ ] Confirmar respuestas 429 al exceder limite de solicitudes por IP (rate limit).

## 5. Verificacion de cabeceras de seguridad

- [ ] `Content-Security-Policy`
- [ ] `Strict-Transport-Security` (solo HTTPS)
- [ ] `X-Frame-Options`
- [ ] `Referrer-Policy`
- [ ] `Permissions-Policy`
- [ ] `X-Content-Type-Options`

Puedes validar rapidamente con DevTools (Network -> Headers) o con:

```bash
curl -I https://tu-dominio.com
curl -I https://tu-dominio.com/api/send-contact.php
```

## 6. Criterio de cierre del proyecto

El proyecto se considera listo para cierre cuando:

- [ ] Build y lint estan en verde.
- [ ] Formularios funcionan en produccion con reCAPTCHA.
- [ ] Correos SMTP llegan correctamente.
- [ ] CORS y cabeceras de seguridad validadas.
- [ ] Variables de entorno completas y sin secretos hardcodeados.
- [ ] No hay errores criticos en logs de aplicacion/servidor.
