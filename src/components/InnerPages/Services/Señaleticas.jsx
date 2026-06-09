import React from "react";
import Link from "next/link";

function Señaleticas() {
  return (
    <section className="services-details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content">
              <div className="mb-50">
                <h2 className="mb-20">Señalética Profesional para Empresas</h2>
                <p className="mb-30">
                  Nuestro servicio de señalética está pensado para empresas,
                  oficinas, locales comerciales y espacios institucionales que
                  necesitan orientar, informar e identificar sus áreas con una
                  imagen clara y profesional. Desarrollamos soluciones visuales
                  funcionales, duraderas y alineadas con la identidad de cada
                  marca.
                </p>
                <p className="mb-30">
                  Fabricamos señaléticas interiores y exteriores utilizando
                  materiales resistentes y terminaciones de calidad. Combinamos
                  diseño, impresión, corte CNC e instalación para entregar un
                  sistema completo de comunicación visual adaptado a cada
                  proyecto.
                </p>
              </div>

              <div className="mb-50">
                <h3 className="mb-30">Tipos de Señalética</h3>
                <div className="row">
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Señalética Corporativa
                      </h5>
                      <p>
                        Identificación de recepciones, oficinas, salas y áreas
                        internas con una estética coherente con tu marca.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Señales de Orientación
                      </h5>
                      <p>
                        Sistemas visuales para guiar recorridos, accesos,
                        salidas, estacionamientos y puntos de atención.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Señalética de Seguridad
                      </h5>
                      <p>
                        Señales informativas, preventivas y normativas para
                        espacios laborales, comerciales e industriales.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Señalética Exterior
                      </h5>
                      <p>
                        Soluciones resistentes para fachadas, accesos y zonas
                        expuestas, pensadas para alta visibilidad y duración.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Directorios y Placas Informativas
                      </h5>
                      <p>
                        Placas, totems y directorios para identificar áreas,
                        niveles, servicios y espacios de atención al público.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="item-box">
                      <h5 className="mb-15">
                        <i className="fas fa-check-circle text-orange me-2"></i>
                        Fabricación e Instalación Integral
                      </h5>
                      <p>
                        Ejecutamos el proyecto completo desde el diseño hasta el
                        montaje final para asegurar uniformidad y calidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-50">
                <h3 className="mb-30">Ventajas de Nuestra Señalética</h3>
                <ul className="list-style-check">
                  <li>
                    Diseño funcional y alineado con la identidad de tu marca
                  </li>
                  <li>Materiales durables para interior y exterior</li>
                  <li>Mejor orientación y experiencia dentro del espacio</li>
                  <li>Producción personalizada según medidas y necesidades</li>
                  <li>Instalación profesional y terminaciones limpias</li>
                  <li>Alta visibilidad, orden y comunicación efectiva</li>
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
                    <p>Interior, exterior, orientación y seguridad</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Materiales</h6>
                    <p>Acrílico, PVC, trovicel, aluminio y vinilo</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Terminaciones</h6>
                    <p>Corte CNC, impresión, laminado y montaje</p>
                  </div>
                  <div className="item mb-20">
                    <h6>Personalización</h6>
                    <p>Medidas, formas y gráfica adaptadas al proyecto</p>
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
                    <p href="/services/letreros">
                      Letreros Personalizados
                    </p>
                  </li>
                  <li>
                    <p href="/services/corte-cnc">Corte CNC</p>
                  </li>
                  <li>
                    <p href="/services/impresion-digital">
                      Impresión Digital
                    </p>
                  </li>
                  <li>
                    <p href="/services/diseno">Diseño Personalizado</p>
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

export default Señaleticas;
