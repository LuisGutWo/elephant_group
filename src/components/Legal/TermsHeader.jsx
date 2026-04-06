import React from "react";
import Link from "next/link";

function TermsHeader() {
  return (
    <header
      className="terms-header"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemProp="mainContentOfPage"
    >
      <div className="header-overlay"></div>
      <div className="header-pattern"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="header-content">
              <div className="breadcrumb-nav">
                <nav aria-label="breadcrumb">
                  <ol
                    className="breadcrumb"
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                  >
                    <li
                      className="breadcrumb-item"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <Link href="/" itemProp="item">
                        <span itemProp="name">Inicio</span>
                      </Link>
                      <meta itemProp="position" content="1" />
                    </li>
                    <li
                      className="breadcrumb-item active"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                      aria-current="page"
                    >
                      <span itemProp="name">Términos y Condiciones</span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="header-text">
                <p className="sub-title" itemProp="about">
                  <span className="dot-decoration"></span>
                  Acuerdo Legal
                </p>
                <h1 className="main-title" itemProp="headline">
                  Términos y Condiciones
                </h1>
                <p className="description" itemProp="description">
                  Condiciones generales que regulan el uso de nuestros servicios
                  de implementos publicitarios, señalética y diseño gráfico.
                </p>
              </div>

              <div className="header-features">
                <div className="feature-item">
                  <div className="feature-icon">📜</div>
                  <div className="feature-text">
                    <strong>Acuerdo Vinculante</strong>
                    <span>Términos claros y transparentes</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">⚖️</div>
                  <div className="feature-text">
                    <strong>Marco Legal</strong>
                    <span>Legislación chilena aplicable</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-text">
                    <strong>Relación Profesional</strong>
                    <span>Derechos y obligaciones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .terms-header {
          position: relative;
          background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
          padding: 140px 0 80px;
          min-height: 50vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 70% 50%,
            rgba(252, 163, 17, 0.15),
            transparent 50%
          );
          pointer-events: none;
          z-index: 1;
        }

        .header-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        /* Breadcrumb */
        .breadcrumb-nav {
          margin-bottom: 32px;
        }

        .breadcrumb {
          background: transparent;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .breadcrumb-item {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
        }

        .breadcrumb-item a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb-item a:hover {
          color: #c9961a;
        }

        .breadcrumb-item.active {
          color: #c9961a;
          font-weight: 600;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "→";
          color: rgba(255, 255, 255, 0.4);
          margin-right: 8px;
        }

        /* Header Text */
        .header-text {
          text-align: center;
          margin-bottom: 48px;
        }

        .sub-title {
          color: #c9961a;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .dot-decoration {
          width: 8px;
          height: 8px;
          background: #c9961a;
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

        .main-title {
          color: #ffffff;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .description {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.125rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Header Features */
        .header-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
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
        }

        .feature-text strong {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          display: block;
        }

        .feature-text span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .terms-header {
            padding: 120px 0 60px;
            min-height: 45vh;
          }

          .main-title {
            font-size: 3rem;
          }

          .header-features {
            gap: 16px;
          }

          .feature-item {
            padding: 16px 20px;
          }
        }

        @media (max-width: 768px) {
          .terms-header {
            padding: 100px 0 50px;
            min-height: 40vh;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .description {
            font-size: 1rem;
          }

          .header-features {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .feature-item {
            padding: 16px 20px;
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

        @media (max-width: 480px) {
          .terms-header {
            padding: 80px 0 40px;
          }

          .main-title {
            font-size: 2rem;
          }

          .sub-title {
            font-size: 0.85rem;
          }

          .breadcrumb-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
}

export default TermsHeader;
