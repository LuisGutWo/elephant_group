import React, { useEffect, useState } from "react";
import Link from "next/link";
import { facebookSvg, instagramSvg } from "@/data/icons";

function Footer({ lightMode, subBg }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (
      !form.name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
      !form.message.trim()
    ) {
      setStatus({
        type: "error",
        msg: "Por favor complete nombre, correo y mensaje válidos.",
      });
      return;
    }

    setLoading(true);
    try {
      // Envia al endpoint existente /api/send-contact adaptando campos requeridos
      await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: "Contacto web",
          email: form.email,
          phone: "No proporcionado",
          message: form.message,
        }),
      });
      setStatus({
        type: "success",
        msg: "Gracias — mensaje enviado. Le contactaremos pronto.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
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
      <div className="eg-footer-top">
        <div className="container eg-footer-inner">
          <div className="eg-contact-col">
            <h3>CONTACTO</h3>
            <ul className="eg-contact-list">
              <li>
                <span className="eg-icon">📍</span>
                <div>
                  <strong>Ubicación</strong>
                  <div>
                    3 Oriente 974 (entre 10 y 11 Norte), Viña del Mar - Chile
                  </div>
                </div>
              </li>
              <li>
                <span className="eg-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <div>+56 9 93239203</div>
                </div>
              </li>
              <li>
                <span className="eg-icon">✉️</span>
                <div>
                  <strong>Correo electrónico</strong>
                  <div>contacto@elephantgroup.cl</div>
                </div>
              </li>
              <li>
                <span className="eg-icon">🕒</span>
                <div>
                  <strong>Horario de atención</strong>
                  <div>Lunes a Viernes 10:00 - 14:00 • 15:00 - 18:00 hrs</div>
                </div>
              </li>
            </ul>

            <div className="eg-socials">
              <a href="#" aria-label="Instagram" className="eg-social">
                IG
              </a>
              <a href="#" aria-label="Facebook" className="eg-social">
                FB
              </a>
              <a href="#" aria-label="LinkedIn" className="eg-social">
                IN
              </a>
            </div>
          </div>

          <div className="eg-form-col">
            <div className="eg-form-card">
              <h4>ENVIAR UN MENSAJE</h4>
              {status.type === "success" && (
                <div className="eg-alert success">{status.msg}</div>
              )}
              {status.type === "error" && (
                <div className="eg-alert error">{status.msg}</div>
              )}

              <form
                onSubmit={handleSubmit}
                className="eg-contact-form"
                noValidate
              >
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  rows="4"
                  required
                />
                <div className="eg-form-actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      setForm({ name: "", email: "", message: "" })
                    }
                    disabled={loading}
                  >
                    CANCELAR
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "ENVIANDO..." : "ENVIAR"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="eg-footer-bottom">
        <div className="container eg-footer-bottom-inner">
          <div className="eg-footer-left">
            <img
              src="/logo-footer.png"
              alt="Elephant Group"
              className="eg-footer-logo"
            />
            <nav className="eg-footer-nav">
              <a href="#">Blog</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos</a>
            </nav>
          </div>
          <div className="eg-footer-right">
            <small>
              © {new Date().getFullYear()} Elephant Group — Todos los derechos
              reservados
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
