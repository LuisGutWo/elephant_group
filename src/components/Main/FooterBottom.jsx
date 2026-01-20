import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const FooterBottom = () => {
  const logoSrc = "/assets/dark/imgs/logo-light.webp";

  return (
    <footer
      itemScope
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
      aria-label="Pie de página inferior"
    >
      <div className="eg-footer-bottom">
        <div className="container eg-footer-bottom-inner">
          {/* Navegación horizontal - primera, arriba */}
          <nav
            className="eg-footer-nav"
            role="navigation"
            aria-label="Enlaces del pie de página"
          >
            <Link
              href="/blog"
              className="eg-footer-link"
              aria-label="Ir al blog"
            >
              Blog
            </Link>
            <span className="eg-footer-separator" aria-hidden="true">
              |
            </span>
            <a
              href="https://listado.mercadolibre.com.ar/_CustId_254777934"
              className="eg-footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver productos en Mercado Libre"
            >
              Mercado Libre
            </a>
            <span className="eg-footer-separator" aria-hidden="true">
              |
            </span>
            <Link
              href="/politica-privacidad"
              className="eg-footer-link"
              aria-label="Leer política de privacidad"
            >
              Política de Privacidad
            </Link>
            <span className="eg-footer-separator" aria-hidden="true">
              |
            </span>
            <Link
              href="/terminos"
              className="eg-footer-link"
              aria-label="Leer términos y condiciones"
            >
              Términos y Condiciones
            </Link>
          </nav>

          {/* Logo - segundo, centrado en medio */}
          <div className="eg-footer-logo-container">
            <Link href="/" aria-label="Ir a la página principal" itemProp="url">
              <Image
                src={logoSrc}
                alt="Elephant Group - Implementos publicitarios en Valparaíso"
                className="eg-footer-logo"
                width={180}
                height={60}
                priority
                itemProp="logo"
              />
            </Link>
          </div>

          {/* Copyright - último, pequeño y centrado */}
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
