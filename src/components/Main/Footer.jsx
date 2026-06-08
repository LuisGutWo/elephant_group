import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Modal } from "react-bootstrap";
import {
  facebookSvg,
  geoTagSvg,
  instagramSvg,
  linkedinSvg,
  mailSvg,
  timeSvg,
  whatsAppSvg2,
} from "@/data/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EMAIL_API from "../../config/emailApi";
import { getRecaptchaSiteKey } from "@/config/recaptcha";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

function Footer({ subBg }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const STATUS_AUTO_CLOSE = 4000; // ms
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [isClient, setIsClient] = useState(false);
  const recaptchaSiteKey = React.useMemo(() => getRecaptchaSiteKey(), []);
  const isRecaptchaConfigured = Boolean(recaptchaSiteKey);
  const usesSameOriginApi = EMAIL_API.sendSimpleContact.startsWith("/");
  // Asegurar renderizado solo en cliente (Next.js SSR fix)
  useEffect(() => {
    setIsClient(true);
  }, []);
  // Mostrar modal cuando status cambia a éxito o error
  useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      setShowStatusModal(true);
      const timer = setTimeout(() => {
        setShowStatusModal(false);
        setStatus({ type: "", msg: "" });
      }, STATUS_AUTO_CLOSE);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    if (
      window.innerWidth > 991 &&
      document.querySelector(".footer-container")
    ) {
      gsap.set(".footer-container", { yPercent: -30 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(".footer-container", { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: "main",
        start: "bottom bottom",
        end: "+=30%",
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  useEffect(() => {
    if (!isClient || !usesSameOriginApi) return;

    const loadCsrfToken = async () => {
      try {
        const res = await fetch("/api/csrf-token", {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data?.csrfToken) {
          setCsrfToken(data.csrfToken);
        }
      } catch {
        // Si falla la carga del token, se informa al intentar enviar.
      }
    };

    loadCsrfToken();
  }, [isClient, usesSameOriginApi]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  // Validación robusta de email
  const isValidEmail = (email) => {
    // RFC 5322 compliant regex (simplificada)
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    );
  };

  // Validar si el texto es solo espacios o caracteres repetidos
  const isSpammy = (text) => {
    if (!text) return true;
    const trimmed = text.trim();
    if (trimmed.length < 10) return true;
    // Detectar si es solo un caracter repetido
    if (/^(.)\1+$/.test(trimmed)) return true;
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validaciones robustas
      const name = form.name.trim();
      const email = form.email.trim();
      const message = form.message.trim();

      if (!name || !email || !message) {
        setStatus({
          type: "error",
          msg: "Por favor complete nombre, correo y mensaje válidos.",
        });
        return;
      }
      if (name.length < 3 || name.length > 50) {
        setStatus({
          type: "error",
          msg: "El nombre debe tener entre 3 y 50 caracteres.",
        });
        return;
      }
      if (!isValidEmail(email) || email.length > 80) {
        setStatus({
          type: "error",
          msg: "Ingrese un correo electrónico válido (máx. 80 caracteres).",
        });
        return;
      }
      if (isSpammy(message) || message.length > 1000) {
        setStatus({
          type: "error",
          msg: "El mensaje debe tener entre 10 y 1000 caracteres y no ser repetitivo.",
        });
        return;
      }

      // Validar reCAPTCHA
      if (!isRecaptchaConfigured) {
        setStatus({
          type: "error",
          msg: "reCAPTCHA no está configurado para este entorno.",
        });
        return;
      }
      if (!recaptchaToken) {
        setStatus({
          type: "error",
          msg: "Por favor completa el reCAPTCHA para continuar.",
        });
        return;
      }
      if (usesSameOriginApi && !csrfToken) {
        setStatus({
          type: "error",
          msg: "Token de seguridad no disponible. Recarga la página e intenta nuevamente.",
        });
        return;
      }

      setLoading(true);
      if (process.env.NODE_ENV === "development") {
        console.log("[Footer] Enviando mensaje de contacto...");
      }

      const headers = { "Content-Type": "application/json" };
      if (usesSameOriginApi) {
        headers["x-csrf-token"] = csrfToken;
      }

      const response = await fetch(EMAIL_API.sendSimpleContact, {
        method: "POST",
        headers,
        body: JSON.stringify({
          name,
          email,
          message,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let backendMessage = "";

        try {
          const errorJson = JSON.parse(errorText);
          backendMessage = errorJson?.message || "";
        } catch {
          // Si no es JSON, se conserva el texto plano.
        }

        console.error(
          `[Footer] Error al enviar mensaje (${EMAIL_API.sendSimpleContact}): ${response.status} ${response.statusText} - ${errorText}`,
        );
        throw new Error(
          backendMessage || `Error sending message: ${response.status}`,
        );
      }

      console.log("[Footer] Mensaje enviado correctamente");
      setStatus({
        type: "success",
        msg: "¡Tu mensaje fue enviado con éxito! Nuestro equipo te responderá pronto. ¡Gracias por confiar en Elephant Group!",
      });
      setForm({ name: "", email: "", message: "" });
      setRecaptchaToken("");
    } catch (err) {
      console.error("[Footer] Error en envío:", err);
      setStatus({
        type: "error",
        msg:
          err?.message ||
          "No pudimos enviar tu mensaje. Por favor revisa tus datos o intenta nuevamente en unos minutos. Si el problema persiste, Contáctanos por WhatsApp o correo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className={subBg ? "sub-bg pt-80" : ""}>
      {/* Organization y ContactPoint Schema.org para refuerzo SEO global */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Elephant Group",
            url: "https://landingclientes.elephantgroup.cl/",
            logo: "https://landingclientes.elephantgroup.cl/light/assets/imgs/logo-light.webp",
            description:
              "Especialistas en señalética, material POP, gigantografías y merchandising en Valparaíso. Soluciones publicitarias para empresas.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3 Oriente 974 (entre 10 y 11 Norte)",
              addressLocality: "Viña del Mar",
              addressRegion: "Valparaíso",
              addressCountry: "CL",
            },
            telephone: "+56 9 93239203",
            email: "contacto@elephantgroup.cl",
            sameAs: [
              "https://www.facebook.com/elephantgroupchile",
              "https://www.instagram.com/elephantgroupchile/",
              "https://www.linkedin.com/company/elephantgroupchile/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+56 9 93239203",
              contactType: "customer service",
              areaServed: "CL",
              availableLanguage: ["Spanish"],
              email: "ventas@elephantgroup.cl",
            },
          }),
        }}
      />
      <div className="eg-footer-top">
        <div className="container eg-footer-inner footer-responsive-minimal">
          <div className="eg-contact-col">
            <h3>CONTACTO</h3>
            <ul className="eg-contact-list">
              <li>
                <span className="eg-icon">{geoTagSvg}</span>
                <div>
                  <strong>Ubicación</strong>
                  <div>
                    3 Oriente 974 (entre 10 y 11 Norte), Viña del Mar - Chile
                  </div>
                </div>
              </li>
              <li>
                <span className="eg-icon">{whatsAppSvg2}</span>
                <div>
                  <strong>Teléfono</strong>
                  <div>+56 9 93239203</div>
                </div>
              </li>
              <li>
                <span className="eg-icon">{mailSvg}</span>
                <div>
                  <strong>Correo electrónico</strong>
                  <div>ventas@elephantgroup.cl</div>
                </div>
              </li>
              <li>
                <span className="eg-icon">{timeSvg}</span>
                <div>
                  <strong>Horario de atención</strong>
                  <div>Lunes a Viernes 10:00 - 14:00 • 15:00 - 18:00 hrs</div>
                </div>
              </li>
            </ul>
          </div>
          {/* El formulario SIEMPRE va debajo en mobile, y a la derecha en desktop */}
          <div
            className="eg-form-col footer-form-mobile-bottom"
            id="cotizacion-form"
          >
            <div className="eg-form-card eg-form-card-minimal">
              <h4 className="text-right mb-20">ENVIAR UN MENSAJE</h4>

              {/* Modal de estado (éxito/error) */}
              <Modal
                show={showStatusModal}
                onHide={() => {
                  setShowStatusModal(false);
                  setStatus({ type: "", msg: "" });
                }}
                centered
                backdrop="static"
                keyboard={true}
                className="status-modal-elegant"
              >
                <Modal.Header
                  closeButton
                  className={
                    status.type === "success"
                      ? "border-success"
                      : "border-danger"
                  }
                >
                  <Modal.Title className="d-flex align-items-center gap-2">
                    {status.type === "success" ? (
                      <span style={{ fontSize: 24, color: "#25D366" }}>✔️</span>
                    ) : (
                      <span style={{ fontSize: 24, color: "#dc3545" }}>⛔</span>
                    )}
                    {status.type === "success"
                      ? "¡Enviado correctamente!"
                      : "No se pudo enviar"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="mb-0">{status.msg}</p>
                </Modal.Body>
              </Modal>
              <form
                onSubmit={handleSubmit}
                className="eg-contact-form"
                noValidate
                aria-label="Formulario de contacto principal"
              >
                <label className="input-label" htmlFor="footer-name">
                  Nombre
                </label>
                <input
                  id="footer-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Nombre completo"
                  aria-describedby="footer-name-desc"
                  aria-invalid={
                    status.type === "error" && !form.name ? "true" : "false"
                  }
                />
                <span id="footer-name-desc" className="visually-hidden">
                  Campo obligatorio. Ingrese su nombre completo.
                </span>
                <label className="input-label" htmlFor="footer-email">
                  Correo electrónico
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Correo electrónico"
                  aria-describedby="footer-email-desc"
                  aria-invalid={
                    status.type === "error" && !form.email ? "true" : "false"
                  }
                />
                <span id="footer-email-desc" className="visually-hidden">
                  Campo obligatorio. Ingrese un correo electrónico válido.
                </span>
                <label className="input-label" htmlFor="footer-message">
                  Mensaje
                </label>
                <textarea
                  id="footer-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  aria-required="true"
                  aria-label="Mensaje"
                  aria-describedby="footer-message-desc"
                  aria-invalid={
                    status.type === "error" && !form.message ? "true" : "false"
                  }
                />
                <span id="footer-message-desc" className="visually-hidden">
                  Campo obligatorio. Escriba su mensaje.
                </span>
                {/* Google reCAPTCHA, botón y redes sociales, uno debajo del otro */}
                <div
                  className="eg-form-actions"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {isClient && isRecaptchaConfigured && (
                    <ReCAPTCHA
                      sitekey={recaptchaSiteKey}
                      onChange={(token) => setRecaptchaToken(token || "")}
                      onExpired={() => {
                        setRecaptchaToken("");
                      }}
                      onErrored={() => {
                        setRecaptchaToken("");
                      }}
                    />
                  )}
                  {isClient && !isRecaptchaConfigured && (
                    <div
                      style={{
                        color: "#dc3545",
                        fontSize: 13,
                        textAlign: "center",
                      }}
                    >
                      reCAPTCHA no configurado. Define
                      NEXT_PUBLIC_RECAPTCHA_SITE_KEY en Vercel.
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn eg-btn-primary"
                    disabled={loading}
                    aria-label={loading ? "Enviando mensaje" : "Enviar mensaje"}
                    style={{ marginTop: 8, minWidth: 140 }}
                  >
                    {loading ? "ENVIANDO..." : "ENVIAR"}
                  </button>
                  {/* Redes sociales debajo del botón */}
                  <div className="eg-footer-social" style={{ width: "100%" }}>
                    <h5
                      className="eg-footer-social__title"
                      style={{ textAlign: "center" }}
                    >
                      Síguenos en:
                    </h5>
                    <div
                      className="eg-social-links"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 16,
                      }}
                    >
                      <a
                        href="https://www.instagram.com/elephantgroupchile/"
                        aria-label="Instagram"
                        className="eg-social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {instagramSvg}
                      </a>
                      <a
                        href="https://www.facebook.com/elephantgroupchile"
                        aria-label="Facebook"
                        className="eg-social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {facebookSvg}
                      </a>
                      <a
                        href="https://www.linkedin.com/company/elephantgroupchile/"
                        aria-label="LinkedIn"
                        className="eg-social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkedinSvg}
                      </a>
                    </div>
                  </div>
                </div>
                {/* Mensaje de entorno de desarrollo para reCAPTCHA */}
                {process.env.NODE_ENV === "development" && (
                  <div
                    style={{
                      color: "#c9961a",
                      fontSize: 13,
                      marginTop: 8,
                      textAlign: "center",
                    }}
                  >
                    <b>Modo desarrollo:</b> El reCAPTCHA puede mostrar
                    advertencias si la clave no es válida para localhost.
                  </div>
                )}
                {/* Feedback accesible para lectores de pantalla */}
                {status.type && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="visually-hidden"
                  >
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
