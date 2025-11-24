import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const FooterBottom = () => {
  const logoSrc = "/light/assets/imgs/logo-light.webp";

  return (
    <footer>
      <div className="eg-footer-bottom">
        <div className="container eg-footer-bottom-inner">
          {/* Contenido principal del footer */}
          <div className="eg-footer-content">
            {/* Navegación del footer - primero como en el diseño anterior */}
            <nav
              className="eg-footer-nav"
              role="navigation"
              aria-label="Footer Navigation"
            >
              <div className="eg-footer-nav-row">
                <Link href="/blog" className="eg-footer-link">
                  Blog
                </Link>
                <a
                  href="https://listado.mercadolibre.com.ar/_CustId_254777934"
                  className="eg-footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mercado Libre
                </a>
              </div>
              <div className="eg-footer-nav-row">
                <Link href="/politica-privacidad" className="eg-footer-link">
                  Política de Privacidad
                </Link>
                <Link href="/terminos" className="eg-footer-link">
                  Términos y Condiciones
                </Link>
              </div>
            </nav>

            {/* Logo - después de la navegación como en el diseño anterior */}
            <div className="eg-footer-logo-container">
              <Image
                src={logoSrc}
                alt="Elephant Group"
                className="eg-footer-logo"
                width={120}
                height={40}
                priority
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="eg-footer-copyright">
            <small>
              © {new Date().getFullYear()} Elephant Group — LAGmedia.
              <br className="eg-footer-break-mobile" />
              Todos los derechos reservados
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
