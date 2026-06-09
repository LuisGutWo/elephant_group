import React from "react";
import Link from "next/link";

function Adhesivos() {
  return (
    <section className="services-details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content">
              <div className="mb-50">
                <h2 className="mb-20">
                  Adhesivos Publicitarios Personalizados
                </h2>
                <p className="mb-30">
                  Nuestro servicio de adhesivos está orientado a potenciar la
                  visibilidad de tu marca en vitrinas, muros, vehículos y puntos
                  de venta. Producimos adhesivos personalizados con alta calidad
                  de impresión, colores vibrantes y excelente adherencia.
                </p>
                <p className="mb-30">
                  Trabajamos con distintos materiales y terminaciones para
                  interior y exterior, incluyendo adhesivos de larga duración,
                  removibles y de uso promocional. Entregamos soluciones a
                  medida según superficie, tamaño y objetivo comercial.
                </p>
              </div>

              <div className="mb-50">
                <h3 className="mb-30">Tipos de Adhesivos</h3>
                <div className="row">
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Vinilo Adhesivo Impreso
                      </h5>
                      <p>
                        Gráficas personalizadas para vitrinas, muros, paneles y
                        superficies lisas con terminación profesional.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Empavonados y Decorativos
                      </h5>
                      <p>
                        Soluciones para vidrios y oficinas que entregan
                        privacidad, diseño y control visual del espacio.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Adhesivos de Corte
                      </h5>
                      <p>
                        Letras, logotipos y formas en corte preciso para
                        branding corporativo y señalización.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Adhesivos Vehiculares
                      </h5>
                      <p>
                        Rotulación para autos, flotas y utilitarios con
                        materiales resistentes a clima y lavado.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Etiquetas Adhesivas
                      </h5>
                      <p>
                        Etiquetas para productos, envases y promociones en
                        distintos tamaños, formatos y tirajes.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Instalación de Adhesivos
                      </h5>
                      <p>
                        Montaje profesional para asegurar acabado limpio,
                        alineado y sin burbujas en cada aplicación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-50">
                <h3 className="mb-30">Ventajas de Nuestros Adhesivos</h3>
                <ul className="list-style-check">
                  <li>Alta adherencia y durabilidad en interior y exterior</li>
                  <li>Personalización completa de tamaños, formas y diseños</li>
                  <li>Materiales removibles o permanentes según necesidad</li>
                  <li>Impresión de alta definición con colores intensos</li>
                  <li>Aplicación profesional en vitrinas, muros y vehículos</li>
                  <li>Soluciones efectivas para branding y promociones</li>
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
                    <h6>Aplicaciones</h6>
                    <p>Vitrinas, vidrios, muros, vehículos y exhibidores</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Materiales</h6>
                    <p>Vinilo blanco, transparente, microperforado y más</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Terminaciones</h6>
                    <p>Brillante, mate, laminado y corte personalizado</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Resistencia</h6>
                    <p>Opciones para uso interior y exterior prolongado</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Instalación</h6>
                    <p>Servicio especializado de aplicación y montaje</p>
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
                    <p href="/services/letreros">Letreros</p>
                  </li>
                  <li>
                    <p href="/services/senaleticas">Señaléticas</p>
                  </li>
                  <li>
                    <p href="/services/diseno">Diseño Personalizado</p>
                  </li>
                  <li>
                    <p href="/quote">Cotización</p>
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

export default Adhesivos;
