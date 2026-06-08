/** @type {import('next').NextConfig} */
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const isProduction = process.env.NODE_ENV === "production";
const scriptSrcTokens = [
  "'self'",
  "'unsafe-inline'",
  ...(!isProduction ? ["'unsafe-eval'"] : []),
  "https://www.google.com",
  "https://www.gstatic.com",
  "https://unpkg.com",
  "https://cdn.jsdelivr.net",
];

const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  `script-src ${scriptSrcTokens.join(" ")}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
  "font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://www.google.com https://www.gstatic.com https://maps.googleapis.com https://maps.gstatic.com",
  "frame-src 'self' https://www.google.com https://recaptcha.google.com",
  "form-action 'self' https://wa.me https://api.whatsapp.com",
  ...(isProduction ? ["upgrade-insecure-requests"] : []),
];

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspDirectives.join("; "),
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [join(__dirname, "css")],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  transpilePackages: [
    "framer-motion",
    "gsap",
    "react-scroll-parallax",
    "@nextui-org/react",
    "@nextui-org/button",
    "@nextui-org/card",
    "@nextui-org/modal",
    "@nextui-org/navbar",
    "@nextui-org/system",
    "@nextui-org/theme",
    "@nextui-org/accordion",
    "@nextui-org/autocomplete",
    "@nextui-org/calendar",
    "@nextui-org/date-picker",
    "@nextui-org/dropdown",
    "@nextui-org/popover",
    "@nextui-org/select",
    "@nextui-org/snippet",
    "@nextui-org/tabs",
    "@nextui-org/tooltip",
    "react-icons",
  ],
};

export default nextConfig;
