import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const FooterBottom = () => {
  const logoSrc = "/dark/assets/imgs/logo-light.webp";

  return (
    <footer>
      <div className="eg-footer-bottom">
        <div className="container">
          <div className="eg-footer-bottom-inner">
            {/* Logo a la izquierda */}
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

            {/* Enlaces de navegación en el centro */}
            <nav
              className="eg-footer-nav"
              role="navigation"
              aria-label="Footer Navigation"
            >
              <Link href="/blog" className="eg-footer-link">
                Blog
              </Link>
              <span className="eg-footer-separator"></span>
              <a
                href="https://listado.mercadolibre.com.ar/_CustId_254777934"
                className="eg-footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manual User
              </a>
              <span className="eg-footer-separator"></span>
              <Link href="/politica-privacidad" className="eg-footer-link">
                Política de Privacidad
              </Link>
              <span className="eg-footer-separator"></span>
              <Link href="/terminos" className="eg-footer-link">
                Términos y Condiciones
              </Link>
            </nav>

            {/* Espacio a la derecha (vacío para balance) */}
            <div className="eg-footer-spacer"></div>
          </div>

          {/* Copyright centrado abajo */}
          <div className="eg-footer-copyright">
            <small>
              © {new Date().getFullYear()} Elephant Group — LAGmedia. Todos los
              derechos reservados
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
