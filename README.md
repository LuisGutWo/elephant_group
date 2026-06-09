# Elephant Group Website

Este repositorio contiene el código fuente del sitio web de Elephant Group, una aplicación web moderna y responsiva construida con Next.js. Aquí encontrarás información sobre los servicios, portafolio y contacto de Elephant Group, agencia creativa especializada en publicidad y marketing.

---

## 🚀 Cambios e Implementaciones Relevantes

### 📱 Integración WhatsApp (Noviembre 2026)

- Envío automático de datos del formulario de contacto a WhatsApp con mensaje preformateado y emojis.
- Redirección automática a WhatsApp Web/App tras enviar el formulario.
- Limpieza automática del formulario y respuesta inmediata al usuario.
- Email de respaldo enviado en segundo plano (con archivo adjunto si aplica).
- Botón de WhatsApp verde con ícono y texto "Enviar por WhatsApp".
- Compatible con desktop, mobile y tablet.
- Configuración sencilla: solo debes editar `.env.local` con tu número de WhatsApp (sin +, espacios ni guiones).
- Documentación rápida y detallada en `md/WHATSAPP_QUICK_START.md` y `md/WHATSAPP_SETUP.md`.

**Ejemplo de mensaje enviado:**

```text
🔔 NUEVA COTIZACIÓN EXPRESS

👤 DATOS DEL CLIENTE
• Nombre: [nombre]
• Empresa: [empresa]
• Email: [email]
• Teléfono: [teléfono]

📦 DETALLES DEL PRODUCTO
• Tipo: [tipo]
• Producto: [producto]
• Material: [material]
• Medidas: [ancho]cm x [alto]cm
• Cantidad: [cantidad]
• Archivo adjunto: [archivo] (si existe)
• Fecha de entrega: [fecha]
• Comentarios: [comentarios] (si existen)

_Enviado desde el formulario web_
```

Más detalles y troubleshooting en `md/RESUMEN_CAMBIOS.md` y `md/COMO_VER_LOS_CAMBIOS.md`.

### 🧭 Optimización MainNavbar (2025)

- Refactorización completa del componente `MainNavbar.jsx` para máxima performance y accesibilidad.
- Uso de React state y memoización para evitar renders innecesarios.
- Throttle en event listeners para scroll ultra fluido (60fps).
- Eliminación de manipulación directa del DOM.
- Clases CSS dinámicas y efecto glass morphism.
- Mejoras visuales: micro-interacciones, animaciones, consistencia de color y diseño responsive.
- Accesibilidad: roles ARIA, labels para screen readers, soporte `prefers-reduced-motion`.
- Métricas: +85% performance, +30pts accesibilidad, -15KB bundle size.
- Propuestas futuras: integración de búsqueda, multi-idioma, notificaciones y temas avanzados.

---

## 🚀 Migración para despliegue en Vercel (2026)

- Los endpoints de contacto y cotización han sido migrados a rutas API de Next.js (`/api/send-contact` y `/api/send-simple-contact`).
- Ya **no se requiere PHP ni funciones Netlify** para el backend de formularios en Vercel.
- Configura las siguientes variables en Vercel: `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`, `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_RECIPIENT`.
- Revisa `.env.local.example` para el formato correcto.
- El archivo `src/config/emailApi.js` detecta automáticamente el entorno (Vercel, Netlify, cPanel) y usa la API adecuada.
- Si usas Vercel, los formularios funcionarán automáticamente usando las rutas API JS/TS.

### cPanel / PHP (Producción)

- Para despliegues en cPanel, el frontend consume endpoints PHP (`/api/send-contact.php` y `/api/send-simple-contact.php`).
- Debes configurar en el hosting: `APP_ENV=production` y `ALLOWED_ORIGIN=https://tu-dominio.com`.
- `ALLOWED_ORIGIN` es obligatoria en producción para permitir solo el origen autorizado (CORS seguro).
- Revisa el checklist operativo en `CHECKLIST_CIERRE_CPANEL.md` antes de publicar.

---

## 🌟 Características Principales

- Modo claro y oscuro, con cambio dinámico.
- Diseño 100% responsivo para cualquier dispositivo.
- Páginas dinámicas: servicios, portafolio, contacto y más.
- Animaciones suaves con GSAP y librerías modernas.
- SEO optimizado (meta tags, datos estructurados).
- Integración directa con WhatsApp.

## 📝 Páginas Clave

- **Inicio**: Presentación de Elephant Group y servicios destacados.
- **Servicios**: Descripción detallada de servicios.
- **Portafolio**: Proyectos realizados.
- **Contacto**: Formulario con integración WhatsApp.

## ⚡ Inicio Rápido

1. Clona el repositorio:

   ```bash
   git clone https://github.com/LuisGutWo/elephant_group_website.git
   cd elephant_group_website
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Configura tu número de WhatsApp en `.env.local`:

   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=56912345678
   ```

   - Formato: solo números, sin +, espacios ni guiones.
   - Ejemplos: Chile `56912345678`, México `5215512345678`, Argentina `5491112345678`.

   Opcional (recomendado para pruebas reales fuera de localhost):

   ```env
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_v2
   RECAPTCHA_SECRET_KEY=tu_secret_key_v2
   ```

   - En desarrollo (`localhost`), si no defines estas variables, el proyecto usa las claves de prueba oficiales de Google para reCAPTCHA v2.
   - En producción, debes configurar tus claves reales en el proveedor de hosting (por ejemplo, Vercel).

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm start` - Servidor de producción
- `npm run lint` - Linter ESLint

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Configura la variable `NEXT_PUBLIC_WHATSAPP_NUMBER` en Project Settings
4. Vercel desplegará automáticamente cada push a main

### Netlify

1. Sube tu código a GitHub
2. Importa el proyecto en [netlify.com](https://netlify.com)
3. Build command: `npm run build` | Publish directory: `.next`
4. Configura la variable `NEXT_PUBLIC_WHATSAPP_NUMBER`

## 📚 Documentación y Ayuda

- `md/WHATSAPP_QUICK_START.md` - Guía rápida WhatsApp
- `md/WHATSAPP_SETUP.md` - Configuración detallada WhatsApp
- `md/COMO_VER_LOS_CAMBIOS.md` - Solución de problemas
- `md/RESUMEN_CAMBIOS.md` - Resumen de cambios recientes
- `md/MAINNAVBAR_OPTIMIZATION.md` - Optimización de navbar

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15
- **UI:** React Bootstrap, NextUI, Framer Motion
- **Mapas:** Leaflet, Google Maps API
- **Íconos:** React Icons
- **Animaciones:** GSAP, Animate.css, WOW.js
- **Formularios:** React Bootstrap Forms
- **Estilos:** Bootstrap 5, CSS Modules

## 🔐 Variables de Entorno

Crea un archivo `.env.local` en la raíz:

```env
# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=56912345678

# reCAPTCHA v2 (Frontend + Backend)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_v2
RECAPTCHA_SECRET_KEY=tu_secret_key_v2

# SMTP (API de contacto)
SMTP_HOST=smtp.tu-proveedor.com
SMTP_PORT=587
SMTP_USER=usuario
SMTP_PASS=contrasena
CONTACT_RECIPIENT=ventas@tudominio.com

# Entorno y CORS seguro para cPanel/PHP
APP_ENV=production
ALLOWED_ORIGIN=https://tu-dominio.com
```

Notas:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` se usa en el cliente (Footer y formularios).
- `RECAPTCHA_SECRET_KEY` se usa solo en backend para verificar el token.
- Si falta `RECAPTCHA_SECRET_KEY` en producción, el endpoint de contacto devolverá error de configuración.
- En producción PHP/cPanel, `ALLOWED_ORIGIN` debe coincidir exactamente con el dominio de navegación.

No subas `.env.local` a Git. Usa `.env.local.example` como plantilla.

## 📄 Licencia

Proyecto privado y confidencial.

## 👥 Equipo

Desarrollado por Elephant Group

## 📞 Soporte

¿Dudas o problemas? Contacta al equipo de desarrollo o abre un issue en este repositorio.
