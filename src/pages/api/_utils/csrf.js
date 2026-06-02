import { randomBytes } from "crypto";

export const CSRF_COOKIE_NAME = "csrf_token";
export const CSRF_HEADER_NAME = "x-csrf-token";

const parseCookies = (cookieHeader = "") => {
  return cookieHeader
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((acc, pair) => {
      const [rawKey, ...rawValue] = pair.split("=");
      if (!rawKey) return acc;
      acc[rawKey] = decodeURIComponent(rawValue.join("=") || "");
      return acc;
    }, {});
};

export const createCsrfToken = () => randomBytes(32).toString("hex");

export const buildCsrfCookie = (token) => {
  const isProduction = process.env.NODE_ENV === "production";
  const parts = [
    `${CSRF_COOKIE_NAME}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=7200",
  ];

  if (isProduction) {
    parts.push("Secure");
  }

  return parts.join("; ");
};

export const isValidCsrf = (req) => {
  const cookies = parseCookies(req.headers.cookie || "");
  const cookieToken = cookies[CSRF_COOKIE_NAME];
  const headerToken = req.headers[CSRF_HEADER_NAME];

  return Boolean(
    cookieToken &&
      typeof headerToken === "string" &&
      headerToken.length > 0 &&
      headerToken === cookieToken,
  );
};
