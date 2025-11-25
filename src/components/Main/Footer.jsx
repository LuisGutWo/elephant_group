import React, { useEffect, useState } from "react";
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

    try {
      if (
        !form ||
        !form.name.trim() ||
        !form.email.trim() ||
        !form.message.trim()
      ) {
        setStatus({
          type: "error",
          msg: "Por favor complete nombre, correo y mensaje válidos.",
        });
        return;
      }

      setLoading(true);

      const response = await fetch(EMAIL_API.sendSimpleContact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Error sending message: ${response.status}`);
      }

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
                <label className="input-label">Nombre</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <label className="input-label">Correo electrónico</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label className="input-label">Mensaje</label>
                <textarea
                  name="message"
                  type="text"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
                <div className="eg-form-actions">
                  <button
                    type="submit"
                    className="btn btn-primary text-light"
                    disabled={loading}
                  >
                    {loading ? "ENVIANDO..." : "ENVIAR"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Redes sociales SOLO visibles debajo de CONTACTO en mobile, y a la derecha del formulario en desktop */}
        <div className="eg-socials minimal eg-socials-footer-adaptive">
          <a href="#" aria-label="Instagram" className="eg-social">
            {instagramSvg}
          </a>
          <a href="#" aria-label="Facebook" className="eg-social">
            {facebookSvg}
          </a>
          <a href="#" aria-label="LinkedIn" className="eg-social">
            {linkedinSvg}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
