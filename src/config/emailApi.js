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
const useDevEmailMock = process.env.NEXT_PUBLIC_USE_DEV_EMAIL_MOCK === "true";

const useMockServer = isDevelopment && isLocalhost && useDevEmailMock;
const useNextApi = isDevelopment || isVercel || isNetlify;

export const EMAIL_API = {
  sendContact: useMockServer
    ? "http://localhost:3001/send-contact"
    : useNextApi
    ? "/api/send-contact"
    : "/api/send-contact.php",
  sendSimpleContact: useMockServer
    ? "http://localhost:3001/send-simple-contact"
    : useNextApi
    ? "/api/send-simple-contact"
    : "/api/send-simple-contact.php",
};

export const ENV_INFO = {
  platform: useMockServer
    ? "Development (Mock)"
    : isDevelopment
    ? "Development (Next API)"
    : isVercel
    ? "Vercel"
    : isNetlify
    ? "Netlify"
    : "cPanel/PHP",
  isServerless: isVercel || isNetlify,
  apiType: useMockServer
    ? "Mock Server"
    : useNextApi
    ? "Next.js API Routes"
    : "PHP Scripts",
};

// Log de configuración (solo en desarrollo)
if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  console.log("🌍 Entorno detectado:", ENV_INFO.platform);
  console.log("📧 API de contacto:", EMAIL_API.sendContact);
  console.log("📧 API simple:", EMAIL_API.sendSimpleContact);
  console.log("🧪 Mock email server activo:", useMockServer);
}

export default EMAIL_API;
