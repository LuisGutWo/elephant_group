/**
 * Configuración de APIs de Email
 * Detecta automáticamente el entorno (Netlify, cPanel o Desarrollo local)
 */

// Detectar entorno

const isVercel =
  typeof window !== "undefined" &&
  window.location.hostname.endsWith("vercel.app");
const isNetlify =
  typeof window !== "undefined" && window.location.hostname.includes("netlify");
const isDevelopment = process.env.NODE_ENV === "development";
const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

export const EMAIL_API = {
  sendContact:
    isDevelopment && isLocalhost
      ? "http://localhost:3001/send-contact"
      : "/api/send-contact",
  sendSimpleContact:
    isDevelopment && isLocalhost
      ? "http://localhost:3001/send-simple-contact"
      : "/api/send-simple-contact",
};

export const ENV_INFO = {
  platform:
    isDevelopment && isLocalhost
      ? "Development (Mock)"
      : isVercel
      ? "Vercel"
      : isNetlify
      ? "Netlify"
      : "cPanel/PHP",
  isServerless: isVercel || isNetlify,
  apiType:
    isDevelopment && isLocalhost
      ? "Mock Server"
      : isVercel
      ? "Next.js API Routes"
      : isNetlify
      ? "Netlify Functions"
      : "PHP Scripts",
};

// Log de configuración (solo en desarrollo)
if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  console.log("🌍 Entorno detectado:", ENV_INFO.platform);
  console.log("📧 API de contacto:", EMAIL_API.sendContact);
  console.log("📧 API simple:", EMAIL_API.sendSimpleContact);
}

export default EMAIL_API;
