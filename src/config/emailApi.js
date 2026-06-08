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
const backendMode = (process.env.NEXT_PUBLIC_EMAIL_BACKEND_MODE || "").trim();
const forceNextApi = backendMode === "next";
const forcePhpApi = backendMode === "php";

const useMockServer = isDevelopment && isLocalhost && useDevEmailMock;
const useNextApi = forceNextApi || isDevelopment || isVercel || isNetlify;
const usePhpApi = forcePhpApi || (!useNextApi && !useMockServer);

export const EMAIL_API = {
  sendContact: useMockServer
    ? "http://localhost:3001/send-contact"
    : useNextApi
    ? "/api/send-contact"
    : usePhpApi
    ? "/api/send-contact.php"
    : "/api/send-contact",
  sendSimpleContact: useMockServer
    ? "http://localhost:3001/send-simple-contact"
    : useNextApi
    ? "/api/send-simple-contact"
    : usePhpApi
    ? "/api/send-simple-contact.php"
    : "/api/send-simple-contact",
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
    : forceNextApi
    ? "cPanel/Node.js (Next API)"
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
  console.log("🧭 backend mode:", backendMode || "auto");
}

export default EMAIL_API;
