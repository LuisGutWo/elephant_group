import React from "react";
import Link from "next/link";

/**
 * StandardHeader - Componente de encabezado estandarizado para todas las páginas
 *
 * @param {Object} props - Propiedades del componente
 * @param {string} props.eyebrow - Texto pequeño superior (opcional)
 * @param {string} props.title - Título principal (requerido)
 * @param {string} props.titleAccent - Palabra destacada en el título (opcional)
 * @param {string} props.description - Descripción del header (opcional)
 * @param {string} props.theme - Tema del header: 'light' o 'dark' (default: 'light')
 * @param {Array} props.breadcrumbs - Array de breadcrumbs [{label, href}] (opcional)
 * @param {Array} props.features - Array de características [{icon, title, subtitle}] (opcional)
 * @param {string} props.backgroundImage - URL de imagen de fondo (opcional)
 * @param {number} props.backgroundOpacity - Opacidad del fondo (default: 0.1)
 * @param {string} props.className - Clases CSS adicionales (opcional)
 * @param {string} props.schemaType - Tipo de Schema.org (default: 'WebPageElement')
 */
function StandardHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  theme = "light",
  breadcrumbs,
  features,
  backgroundImage,
  backgroundOpacity = 0.1,
  className = "",
  schemaType = "WebPageElement",
}) {
  const isDark = theme === "dark";

  // Formatear título con acento
  const renderTitle = () => {
    if (!titleAccent) {
      return (
        <h1 className="standard-header-title" itemProp="headline">
          {title}
        </h1>
      );
    }

    const parts = title.split(titleAccent);
    return (
      <h1 className="standard-header-title" itemProp="headline">
        {parts[0]}
        <span className="title-accent">{titleAccent}</span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <header
      className={`standard-header ${
        isDark ? "theme-dark" : "theme-light"
      } ${className}`}
      itemScope
      itemType={`https://schema.org/${schemaType}`}
    >
      {/* Background Pattern/Image */}
      {backgroundImage && (
        <div
          className="header-background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: backgroundOpacity,
          }}
          aria-hidden="true"
        />
      )}

      <div className="header-pattern" aria-hidden="true" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="header-content">
              {/* Breadcrumbs */}
              {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="breadcrumb-nav" aria-label="breadcrumb">
                  <ol
                    className="breadcrumb"
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                  >
                    {breadcrumbs.map((crumb, index) => (
                      <li
                        key={index}
                        className={`breadcrumb-item ${
                          index === breadcrumbs.length - 1 ? "active" : ""
                        }`}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        aria-current={
                          index === breadcrumbs.length - 1 ? "page" : undefined
                        }
                      >
                        {crumb.href ? (
                          <Link href={crumb.href} itemProp="item">
                            <span itemProp="name">{crumb.label}</span>
                          </Link>
                        ) : (
                          <span itemProp="name">{crumb.label}</span>
                        )}
                        <meta itemProp="position" content={index + 1} />
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Header Text */}
              <div className="header-text">
                {eyebrow && (
                  <p className="header-eyebrow" itemProp="about">
                    <span className="dot-decoration" />
                    {eyebrow}
                  </p>
                )}

                {renderTitle()}

                {description && (
                  <p className="header-description" itemProp="description">
                    {description}
                  </p>
                )}
              </div>

              {/* Features */}
              {features && features.length > 0 && (
                <div className="header-features">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">{feature.icon}</div>
                      <div className="feature-text">
                        <strong>{feature.title}</strong>
                        {feature.subtitle && <span>{feature.subtitle}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base Styles */
        .standard-header {
          position: relative;
          padding: 140px 0 80px;
          min-height: 50vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .theme-light {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .theme-dark {
          background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
        }

        /* Background Elements */
        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          z-index: 1;
          pointer-events: none;
        }

        .header-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
          z-index: 1;
        }

        .theme-dark .header-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .header-content {
          text-align: center;
        }

        /* Breadcrumbs */
        .breadcrumb-nav {
          margin-bottom: 32px;
        }

        .breadcrumb {
          background: transparent;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .breadcrumb-item {
          font-size: 0.9rem;
          display: flex;
          align-items: center;
        }

        .theme-light .breadcrumb-item {
          color: rgba(0, 0, 0, 0.6);
        }

        .theme-dark .breadcrumb-item {
          color: rgba(255, 255, 255, 0.6);
        }

        .breadcrumb-item :global(a) {
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .theme-light .breadcrumb-item :global(a) {
          color: rgba(0, 0, 0, 0.7);
        }

        .theme-light .breadcrumb-item :global(a):hover {
          color: #fca311;
        }

        .theme-dark .breadcrumb-item :global(a) {
          color: rgba(255, 255, 255, 0.7);
        }

        .theme-dark .breadcrumb-item :global(a):hover {
          color: #fca311;
        }

        .breadcrumb-item.active {
          color: #fca311;
          font-weight: 600;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "→";
          margin-right: 8px;
        }

        .theme-light .breadcrumb-item + .breadcrumb-item::before {
          color: rgba(0, 0, 0, 0.4);
        }

        .theme-dark .breadcrumb-item + .breadcrumb-item::before {
          color: rgba(255, 255, 255, 0.4);
        }

        /* Header Text */
        .header-text {
          margin-bottom: 48px;
        }

        .header-eyebrow {
          color: #fca311;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .dot-decoration {
          width: 8px;
          height: 8px;
          background: #fca311;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .standard-header-title {
          font-size: clamp(1.5rem, 3vw, 2rem) !important;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .theme-light .standard-header-title {
          color: #1a1a1a;
        }

        .theme-dark .standard-header-title {
          color: #ffffff;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .title-accent {
          color: #fca311;
          font-weight: 700;
        }

        .header-description {
          font-size: clamp(0.9375rem, 2vw, 1.125rem);
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        .theme-light .header-description {
          color: #666;
        }

        .theme-dark .header-description {
          color: rgba(255, 255, 255, 0.85);
        }

        /* Features */
        .header-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .theme-light .feature-item {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .theme-light .feature-item:hover {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(252, 163, 17, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .theme-dark .feature-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .theme-dark .feature-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(252, 163, 17, 0.3);
          transform: translateY(-4px);
        }

        .feature-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .feature-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .feature-text strong {
          font-size: 1rem;
          font-weight: 700;
          display: block;
        }

        .theme-light .feature-text strong {
          color: #1a1a1a;
        }

        .theme-dark .feature-text strong {
          color: #ffffff;
        }

        .feature-text span {
          font-size: 0.85rem;
        }

        .theme-light .feature-text span {
          color: #666;
        }

        .theme-dark .feature-text span {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .standard-header {
            padding: 120px 0 60px;
          }
        }

        @media (max-width: 992px) {
          .standard-header {
            padding: 100px 0 50px;
            min-height: 45vh;
          }

          .header-text {
            margin-bottom: 32px;
          }

          .header-features {
            gap: 16px;
          }

          .feature-item {
            padding: 16px 20px;
          }
        }

        @media (max-width: 768px) {
          .standard-header {
            padding: 80px 0 40px;
            min-height: 40vh;
          }

          .header-text {
            margin-bottom: 24px;
          }

          .header-features {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .feature-icon {
            font-size: 1.75rem;
          }

          .feature-text strong {
            font-size: 0.95rem;
          }

          .feature-text span {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 576px) {
          .standard-header {
            padding: 60px 0 30px;
          }

          .breadcrumb-nav {
            margin-bottom: 24px;
          }

          .breadcrumb-item {
            font-size: 0.8rem;
          }

          .header-eyebrow {
            letter-spacing: 1px;
          }

          .dot-decoration {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </header>
  );
}

export default StandardHeader;
