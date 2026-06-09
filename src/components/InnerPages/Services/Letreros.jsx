import React from "react";
import Link from "next/link";

function Letreros() {
  return (
    <section className="services-details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content">
              <div className="mb-50">
                <h2 className="mb-20">Letreros Profesionales Personalizados</h2>
                <p className="mb-30">
                  Nuestro servicio de letreros está diseñado para comercios,
                  empresas y negocios que desean destacar con identidad visual
                  profesional. Creamos letreros de alto impacto visual
                  utilizando tecnología de corte CNC y impresión de gran formato
                  con colores vibrantes y detalles excepcionales.
                </p>
                <p className="mb-30">
                  Ideal para fachadas, interiores, señalética corporativa y
                  aplicaciones que requieran máxima visibilidad. Trabajamos con
                  diversos materiales como acrílicos, trovicel, madera, aluminio
                  compuesto y vinilos según las necesidades de tu proyecto.
                </p>
              </div>

              <div className="mb-50">
                <h3 className="mb-30">Tipos de Letreros</h3>
                <div className="row">
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Letreros Cortados CNC
                      </h5>
                      <p>
                        Letreros precisos y personalizados cortados en acrílico,
                        madera, aluminio compuesto y trovicel para fachadas y
                        espacios interiores.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Letreros Impresos
                      </h5>
                      <p>
                        Letreros de gran formato impresos en vinilo adhesivo,
                        tela PVC, canvas y magnéticos con colores vibrantes.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Rótulos y Nombres Corporativos
                      </h5>
                      <p>
                        Identificación de empresa y comercios con diseño
                        personalizados que reflejan tu identidad corporativa.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Señalética Profesional
                      </h5>
                      <p>
                        Señales de navegación, información y orientación para
                        comercios, oficinas y espacios públicos.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Letreros Iluminados
                      </h5>
                      <p>
                        Letreros con retroiluminación para máxima visibilidad
                        nocturna y presencia impactante.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Instalación y Montaje Profesional
                      </h5>
                      <p>
                        Instalación especializada en fachadas, interiores y
                        espacios especiales con garantía de calidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-50">
                <h3 className="mb-30">Ventajas de Nuestros Letreros</h3>
                <ul className="list-style-check">
                  <li>Diseño personalizado para tu identidad corporativa</li>
                  <li>Múltiples materiales y acabados disponibles</li>
                  <li>Resistencia a intemperie para uso exterior prolongado</li>
                  <li>Instalación y montaje especializado incluido</li>
                  <li>Colores vibrantes y definición de calidad profesional</li>
                  <li>
                    Asesoramiento en ubicación y orientación para máxima
                    visibilidad
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget-box mb-50">
                <h4 className="mb-30">Especificaciones Técnicas</h4>
                <div className="info-list">
                  <div className="item mb-20">
                    <h6>Tamaños Disponibles</h6>
                    <p>Desde pequeños rótulos hasta 5+ metros</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Materiales Principales</h6>
                    <p>Acrílico, Trovicel, Madera, Aluminio, Vinilo</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Acabados</h6>
                    <p>Brillante, Mate, Translúcido, Iluminado</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Precisión de Corte</h6>
                    <p>CNC con tolerancia de ±1mm</p>
                  </div>
                </div>
              </div>

              <div className="widget-box mb-50">
                <h4 className="mb-30">¿Necesitas una Cotización?</h4>
                <p className="mb-20">
                  Contáctanos para recibir una cotización personalizada de tu
                  proyecto.
                </p>
                <Link
                  href="/quote"
                  className="butn butn-md butn-bord butn-rounded btn-primary"
                >
                  <span>Solicitar Cotización</span>
                </Link>
              </div>

              <div className="widget-box">
                <h4 className="mb-30">Servicios Relacionados</h4>
                <ul className="services-links">
                  <li>
                    <p href="/services/corte-cnc">
                      Corte CNC Profesional
                    </p>
                  </li>
                  <li>
                    <p href="/services/impresion-digital">
                      Impresión Digital Gran Formato
                    </p>
                  </li>
                  <li>
                    <p href="/services/diseno">Diseño Personalizado</p>
                  </li>
                  <li>
                    <p href="/services/instalacion">
                      Instalación y Montaje
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-details {
          background: #2a2a2a;
          color: #ffffff;
        }

        .content h2 {
          color: #c9961a;
          font-weight: 700;
        }

        .content h3 {
          color: #ffffff;
          font-weight: 600;
          font-size: 28px;
        }

        .content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          font-size: 16px;
        }

        .item-box {
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .item-box:hover {
          background: rgba(252, 163, 17, 0.1);
          border-color: rgba(252, 163, 17, 0.3);
          transform: translateY(-5px);
        }

        .item-box h5 {
          color: #ffffff;
          font-size: 18px;
        }

        .item-box p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 14px;
        }

        .text-orange {
          color: #c9961a;
        }

        .list-style-check {
          list-style: none;
          padding: 0;
        }

        .list-style-check li {
          padding: 12px 0;
          padding-left: 30px;
          position: relative;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
        }

        .list-style-check li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #c9961a;
          font-weight: bold;
          font-size: 20px;
        }

        .sidebar {
          position: sticky;
          top: 100px;
        }

        .widget-box {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .widget-box h4 {
          color: #c9961a;
          font-weight: 700;
          font-size: 22px;
        }

        .widget-box p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
        }

        .info-list .item h6 {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .info-list .item p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin: 0;
        }

        .butn {
          display: inline-block;
          padding: 12px 30px;
          background: transparent;
          color: #c9961a;
          border: 2px solid #c9961a;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .butn:hover {
          background: #c9961a;
          color: #000000;
        }

        .services-links {
          list-style: none;
          padding: 0;
        }

        .services-links li {
          margin-bottom: 15px;
        }

        .services-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          padding: 10px 15px;
          border-left: 3px solid transparent;
          padding-left: 15px;
        }

        .services-links a:hover {
          color: #c9961a;
          border-left-color: #c9961a;
          padding-left: 20px;
        }

        @media (max-width: 991px) {
          .sidebar {
            position: relative;
            top: 0;
            margin-top: 50px;
          }
        }
      `}</style>
    </section>
  );
}

export default Letreros;
