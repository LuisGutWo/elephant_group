const RECAPTCHA_TEST_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_TEST_SITE_KEY || "";

const isLocalhost = () => {
  if (typeof window === "undefined") return false;
  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  );
};

export const getRecaptchaSiteKey = () => {
  if (isLocalhost()) {
    return (
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_LOCALHOST ||
      RECAPTCHA_TEST_SITE_KEY
    );
  }

  // En producción/staging no usar fallback hardcodeado para evitar
  // comportamientos inconsistentes si la clave no está autorizada para el dominio.
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
};
