import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  facebookSvg,
  geoTagSvg,
  instagramSvg,
  linkedinSvg,
  mailSvg,
  timeSvg,
  whatsAppSvg,
} from "@/data/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EMAIL_API from "../../config/emailApi";

gsap.registerPlugin(ScrollTrigger);

function Footer({ subBg }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const STATUS_AUTO_CLOSE = 4000; // ms
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
    if (window.innerWidth > 991) {
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

      setLoading(true);
      console.log("[Footer] Enviando mensaje:", {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      const response = await fetch(EMAIL_API.sendSimpleContact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `[Footer] Error al enviar mensaje: ${response.status} - ${errorText}`,
        );
        throw new Error(`Error sending message: ${response.status}`);
      }

      console.log("[Footer] Mensaje enviado correctamente");
      setStatus({
        type: "success",
        msg: "Gracias — mensaje enviado. Le contactaremos pronto.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("[Footer] Error en envío:", err);
      setStatus({
        type: "error",
        msg: "Error enviando el mensaje. Intente nuevamente.",
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
              email: "contacto@elephantgroup.cl",
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
                <span className="eg-icon">{whatsAppSvg}</span>
                <div>
                  <strong>Teléfono</strong>
                  <div>+56 9 93239203</div>
                </div>
              </li>
              <li>
                <span className="eg-icon">{mailSvg}</span>
                <div>
                  <strong>Correo electrónico</strong>
                  <div>contacto@elephantgroup.cl</div>
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
          <div className="eg-form-col footer-form-mobile-bottom">
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
                      <span style={{ fontSize: 22, color: "#25D366" }}>✔️</span>
                    ) : (
                      <span style={{ fontSize: 22, color: "#dc3545" }}>⛔</span>
                    )}
                    {status.type === "success" ? "¡Mensaje enviado!" : "Error"}
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
                <div className="eg-form-actions">
                  <button
                    type="submit"
                    className="btn eg-btn-primary"
                    disabled={loading}
                    aria-label={loading ? "Enviando mensaje" : "Enviar mensaje"}
                  >
                    {loading ? "ENVIANDO..." : "ENVIAR"}
                  </button>
                </div>
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
        {/* Redes sociales SOLO visibles debajo de CONTACTO en mobile, y a la derecha del formulario en desktop */}
        <div className="eg-socials minimal eg-socials-footer-adaptive">
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
    </footer>
  );
}

export default Footer;
