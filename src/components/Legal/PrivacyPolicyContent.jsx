import React from "react";

function PrivacyPolicyContent() {
  return (
    <section
      className="privacy-policy-content section-padding"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <article
              className="policy-article"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Article"
            >
              {/* Introducción */}
              <div className="policy-section intro-section">
                <p className="lead-text" itemProp="description">
                  En <strong>Elephant Group</strong>, valoramos y respetamos tu
                  privacidad. Esta Política de Privacidad describe cómo
                  recopilamos, usamos, almacenamos y protegemos tu información
                  personal cuando utilizas nuestros servicios de implementos
                  publicitarios, señalética y diseño gráfico.
                </p>
                <p className="update-date">
                  <strong>Última actualización:</strong> 24 de noviembre de 2025
                </p>
              </div>

              {/* Sección 1: Información que Recopilamos */}
              <div className="policy-section" id="informacion-recopilada">
                <h2 className="section-title">
                  <span className="section-number">01</span>
                  Información que Recopilamos
                </h2>
                <p>
                  Recopilamos diferentes tipos de información para brindarte el
                  mejor servicio posible:
                </p>

                <h3 className="subsection-title">Información Personal</h3>
                <ul className="policy-list">
                  <li>
                    <strong>Datos de contacto:</strong> Nombre completo,
                    dirección de correo electrónico, número de teléfono,
                    dirección física.
                  </li>
                  <li>
                    <strong>Información comercial:</strong> Nombre de la
                    empresa, RUT, giro comercial, cargo.
                  </li>
                  <li>
                    <strong>Detalles del proyecto:</strong> Especificaciones
                    técnicas, archivos de diseño, preferencias de materiales.
                  </li>
                </ul>

                <h3 className="subsection-title">Información Técnica</h3>
                <ul className="policy-list">
                  <li>Dirección IP y ubicación geográfica aproximada</li>
                  <li>Tipo de navegador, versión y configuración de idioma</li>
                  <li>Páginas visitadas, tiempo de permanencia y clicks</li>
                  <li>Dispositivo utilizado (desktop, móvil, tablet)</li>
                </ul>
              </div>

              {/* Sección 2: Cómo Usamos tu Información */}
              <div className="policy-section" id="uso-informacion">
                <h2 className="section-title">
                  <span className="section-number">02</span>
                  Cómo Usamos tu Información
                </h2>
                <p>Utilizamos tu información personal para:</p>

                <div className="usage-grid">
                  <div className="usage-card">
                    <div className="card-icon">📋</div>
                    <h4>Gestión de Servicios</h4>
                    <p>
                      Procesar cotizaciones, gestionar pedidos y coordinar la
                      producción de implementos publicitarios.
                    </p>
                  </div>

                  <div className="usage-card">
                    <div className="card-icon">💬</div>
                    <h4>Comunicación</h4>
                    <p>
                      Responder consultas, enviar confirmaciones de pedidos y
                      actualizaciones de proyectos.
                    </p>
                  </div>

                  <div className="usage-card">
                    <div className="card-icon">📊</div>
                    <h4>Mejora Continua</h4>
                    <p>
                      Analizar el uso del sitio web para mejorar nuestros
                      servicios y experiencia de usuario.
                    </p>
                  </div>

                  <div className="usage-card">
                    <div className="card-icon">🔒</div>
                    <h4>Seguridad</h4>
                    <p>
                      Prevenir fraudes, proteger nuestros sistemas y garantizar
                      la seguridad de tus datos.
                    </p>
                  </div>

                  <div className="usage-card">
                    <div className="card-icon">📢</div>
                    <h4>Marketing</h4>
                    <p>
                      Enviarte información sobre nuevos productos, servicios y
                      promociones (con tu consentimiento).
                    </p>
                  </div>

                  <div className="usage-card">
                    <div className="card-icon">⚖️</div>
                    <h4>Cumplimiento Legal</h4>
                    <p>
                      Cumplir con obligaciones legales, regulatorias y
                      contractuales aplicables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 3: Compartir Información */}
              <div className="policy-section" id="compartir-informacion">
                <h2 className="section-title">
                  <span className="section-number">03</span>
                  Compartir tu Información
                </h2>
                <p>
                  No vendemos ni alquilamos tu información personal. Solo
                  compartimos tus datos en las siguientes circunstancias:
                </p>

                <div className="info-box warning-box">
                  <h4>🤝 Proveedores de Servicios</h4>
                  <p>
                    Compartimos información con proveedores confiables que nos
                    ayudan a operar nuestro negocio (servicios de hosting,
                    procesamiento de pagos, mensajería).
                  </p>
                </div>

                <div className="info-box info-box-neutral">
                  <h4>⚖️ Requisitos Legales</h4>
                  <p>
                    Podemos divulgar información cuando sea requerido por ley,
                    orden judicial o proceso legal aplicable.
                  </p>
                </div>

                <div className="info-box info-box-neutral">
                  <h4>🏢 Transferencia de Negocio</h4>
                  <p>
                    En caso de fusión, adquisición o venta de activos, tu
                    información podría ser transferida a la nueva entidad.
                  </p>
                </div>
              </div>

              {/* Sección 4: Cookies y Tecnologías Similares */}
              <div className="policy-section" id="cookies">
                <h2 className="section-title">
                  <span className="section-number">04</span>
                  Cookies y Tecnologías Similares
                </h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu
                  experiencia en nuestro sitio web:
                </p>

                <table className="cookies-table">
                  <thead>
                    <tr>
                      <th>Tipo de Cookie</th>
                      <th>Propósito</th>
                      <th>Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Esenciales</strong>
                      </td>
                      <td>
                        Necesarias para el funcionamiento básico del sitio
                      </td>
                      <td>Sesión</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Funcionales</strong>
                      </td>
                      <td>Recordar preferencias y configuraciones</td>
                      <td>1 año</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Analíticas</strong>
                      </td>
                      <td>Analizar el uso del sitio y mejorar el servicio</td>
                      <td>2 años</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Marketing</strong>
                      </td>
                      <td>Personalizar anuncios y medir efectividad</td>
                      <td>6 meses</td>
                    </tr>
                  </tbody>
                </table>

                <p className="note-text">
                  Puedes gestionar tus preferencias de cookies en la
                  configuración de tu navegador.
                </p>
              </div>

              {/* Sección 5: Seguridad de Datos */}
              <div className="policy-section" id="seguridad">
                <h2 className="section-title">
                  <span className="section-number">05</span>
                  Seguridad de tus Datos
                </h2>
                <p>
                  Implementamos medidas de seguridad técnicas, administrativas y
                  físicas para proteger tu información:
                </p>

                <ul className="security-list">
                  <li>🔐 Cifrado SSL/TLS en todas las comunicaciones</li>
                  <li>🛡️ Firewalls y sistemas de detección de intrusos</li>
                  <li>👥 Acceso restringido solo a personal autorizado</li>
                  <li>
                    💾 Copias de seguridad regulares y almacenamiento seguro
                  </li>
                  <li>
                    🔄 Actualizaciones periódicas de sistemas de seguridad
                  </li>
                  <li>📝 Auditorías de seguridad y evaluaciones de riesgos</li>
                </ul>
              </div>

              {/* Sección 6: Tus Derechos */}
              <div className="policy-section" id="derechos">
                <h2 className="section-title">
                  <span className="section-number">06</span>
                  Tus Derechos
                </h2>
                <p>
                  De acuerdo con la Ley N° 19.628 sobre Protección de Datos
                  Personales en Chile, tienes derecho a:
                </p>

                <div className="rights-grid">
                  <div className="right-card">
                    <h4>📖 Acceso</h4>
                    <p>
                      Solicitar una copia de la información personal que tenemos
                      sobre ti.
                    </p>
                  </div>

                  <div className="right-card">
                    <h4>✏️ Rectificación</h4>
                    <p>
                      Corregir datos inexactos o incompletos en nuestros
                      registros.
                    </p>
                  </div>

                  <div className="right-card">
                    <h4>🗑️ Eliminación</h4>
                    <p>
                      Solicitar la eliminación de tus datos personales (sujeto a
                      obligaciones legales).
                    </p>
                  </div>

                  <div className="right-card">
                    <h4>🚫 Oposición</h4>
                    <p>
                      Oponerte al procesamiento de tu información para ciertos
                      fines.
                    </p>
                  </div>

                  <div className="right-card">
                    <h4>📤 Portabilidad</h4>
                    <p>
                      Recibir tus datos en formato estructurado y transferirlos
                      a otro proveedor.
                    </p>
                  </div>

                  <div className="right-card">
                    <h4>⏸️ Limitación</h4>
                    <p>
                      Restringir el procesamiento de tu información en ciertas
                      circunstancias.
                    </p>
                  </div>
                </div>

                <div className="info-box contact-box">
                  <h4>Ejercer tus Derechos</h4>
                  <p>
                    Para ejercer cualquiera de estos derechos, Contáctanos en:
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contacto@elephantgroup.cl">
                      contacto@elephantgroup.cl
                    </a>
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +56 9 5163 1370
                  </p>
                </div>
              </div>

              {/* Sección 7: Retención de Datos */}
              <div className="policy-section" id="retencion">
                <h2 className="section-title">
                  <span className="section-number">07</span>
                  Retención de Datos
                </h2>
                <p>
                  Conservamos tu información personal solo durante el tiempo
                  necesario para cumplir con los propósitos descritos en esta
                  política, a menos que la ley requiera o permita un período de
                  retención más largo.
                </p>

                <ul className="policy-list">
                  <li>
                    <strong>Datos de clientes activos:</strong> Durante la
                    relación comercial y hasta 7 años después por requisitos
                    fiscales.
                  </li>
                  <li>
                    <strong>Cotizaciones no aceptadas:</strong> 2 años desde la
                    última interacción.
                  </li>
                  <li>
                    <strong>Datos de marketing:</strong> Hasta que retires tu
                    consentimiento o solicites su eliminación.
                  </li>
                </ul>
              </div>

              {/* Sección 8: Menores de Edad */}
              <div className="policy-section" id="menores">
                <h2 className="section-title">
                  <span className="section-number">08</span>
                  Protección de Menores
                </h2>
                <p>
                  Nuestros servicios están dirigidos a empresas y profesionales.
                  No recopilamos intencionalmente información de menores de 18
                  años sin el consentimiento parental. Si descubrimos que hemos
                  recopilado datos de un menor sin autorización, eliminaremos
                  esa información de inmediato.
                </p>
              </div>

              {/* Sección 9: Enlaces Externos */}
              <div className="policy-section" id="enlaces-externos">
                <h2 className="section-title">
                  <span className="section-number">09</span>
                  Enlaces a Sitios de Terceros
                </h2>
                <p>
                  Nuestro sitio web puede contener enlaces a sitios de terceros.
                  No somos responsables de las prácticas de privacidad de estos
                  sitios. Te recomendamos leer sus políticas de privacidad antes
                  de proporcionar cualquier información.
                </p>
              </div>

              {/* Sección 10: Cambios en la Política */}
              <div className="policy-section" id="cambios">
                <h2 className="section-title">
                  <span className="section-number">10</span>
                  Cambios en esta Política
                </h2>
                <p>
                  Podemos actualizar esta Política de Privacidad periódicamente
                  para reflejar cambios en nuestras prácticas o requisitos
                  legales. Te notificaremos sobre cambios significativos a
                  través de:
                </p>

                <ul className="policy-list">
                  <li>
                    Un aviso destacado en nuestro sitio web durante 30 días
                  </li>
                  <li>
                    Correo electrónico a la dirección registrada en tu cuenta
                  </li>
                  <li>
                    Actualización de la fecha de &ldquo;Última
                    actualización&rdquo; en esta página
                  </li>
                </ul>
              </div>

              {/* Sección 11: Contacto */}
              <div className="policy-section contact-section" id="contacto">
                <h2 className="section-title">
                  <span className="section-number">11</span>
                  Contacto
                </h2>
                <p>
                  Si tienes preguntas, inquietudes o solicitudes relacionadas
                  con esta Política de Privacidad, Contáctanos:
                </p>

                <div className="contact-info-grid">
                  <div className="contact-item">
                    <h4>📧 Correo Electrónico</h4>
                    <a href="mailto:contacto@elephantgroup.cl">
                      contacto@elephantgroup.cl
                    </a>
                  </div>

                  <div className="contact-item">
                    <h4>📱 Teléfono</h4>
                    <a href="tel:+56951631370">+56 9 5163 1370</a>
                  </div>

                  <div className="contact-item">
                    <h4>📍 Dirección</h4>
                    <p>
                      Viña del Mar, Valparaiso y V Region
                      <br />
                      Chile
                    </p>
                  </div>

                  <div className="contact-item">
                    <h4>🏢 Razón Social</h4>
                    <p>Elephant Group - LAGmedia</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privacy-policy-content {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .policy-article {
          background: #ffffff;
          border-radius: 16px;
          padding: 60px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        /* Introducción */
        .intro-section {
          margin-bottom: 50px;
          padding-bottom: 40px;
          border-bottom: 2px solid #c9961a;
        }

        .lead-text {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #2c3e50;
          margin-bottom: 24px;
        }

        .update-date {
          color: #7f8c8d;
          font-size: 0.9rem;
          font-style: italic;
        }

        /* Secciones */
        .policy-section {
          margin-bottom: 60px;
        }

        .section-title {
          color: #1a1a1a;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .section-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #c9961a, #c9961a);
          color: #ffffff;
          border-radius: 12px;
          font-size: 1.25rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .subsection-title {
          color: #2c3e50;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 32px;
          margin-bottom: 16px;
        }

        .policy-section p {
          color: #34495e;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        /* Listas */
        .policy-list {
          list-style: none;
          padding: 0;
          margin: 24px 0;
        }

        .policy-list li {
          position: relative;
          padding-left: 32px;
          margin-bottom: 16px;
          color: #34495e;
          line-height: 1.7;
        }

        .policy-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #c9961a;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .security-list {
          list-style: none;
          padding: 0;
          margin: 24px 0;
        }

        .security-list li {
          padding: 12px 20px;
          margin-bottom: 12px;
          background: rgba(252, 163, 17, 0.05);
          border-left: 4px solid #c9961a;
          border-radius: 8px;
          font-size: 1rem;
          color: #2c3e50;
        }

        /* Grids */
        .usage-grid,
        .rights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin: 32px 0;
        }

        .usage-card,
        .right-card {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .usage-card:hover,
        .right-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(252, 163, 17, 0.15);
          border-color: #c9961a;
        }

        .card-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .usage-card h4,
        .right-card h4 {
          color: #2c3e50;
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .usage-card p,
        .right-card p {
          color: #5a6c7d;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Info Boxes */
        .info-box {
          padding: 24px;
          border-radius: 12px;
          margin: 24px 0;
          border-left: 4px solid;
        }

        .info-box h4 {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .info-box p {
          margin-bottom: 8px;
        }

        .info-box p:last-child {
          margin-bottom: 0;
        }

        .warning-box {
          background: rgba(255, 193, 7, 0.1);
          border-left-color: #ffc107;
        }

        .warning-box h4 {
          color: #f57c00;
        }

        .info-box-neutral {
          background: rgba(108, 117, 125, 0.1);
          border-left-color: #6c757d;
        }

        .info-box-neutral h4 {
          color: #495057;
        }

        .contact-box {
          background: rgba(252, 163, 17, 0.1);
          border-left-color: #c9961a;
        }

        .contact-box h4 {
          color: #e65100;
        }

        .contact-box a {
          color: #c9961a;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-box a:hover {
          color: #f37a1d;
          text-decoration: underline;
        }

        /* Tabla de Cookies */
        .cookies-table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .cookies-table thead {
          background: #c9961a;
          color: #ffffff;
        }

        .cookies-table th {
          padding: 16px;
          text-align: left;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .cookies-table td {
          padding: 16px;
          border-bottom: 1px solid #e9ecef;
          color: #34495e;
          font-size: 0.95rem;
        }

        .cookies-table tbody tr:last-child td {
          border-bottom: none;
        }

        .cookies-table tbody tr:hover {
          background: #f8f9fa;
        }

        .note-text {
          font-size: 0.9rem;
          color: #7f8c8d;
          font-style: italic;
          margin-top: 16px;
        }

        /* Contacto Final */
        .contact-section {
          background: linear-gradient(135deg, #c9961a, #c9961a);
          border-radius: 16px;
          padding: 40px;
          margin-top: 60px;
        }

        .contact-section .section-title {
          color: #ffffff;
        }

        .contact-section .section-number {
          background: rgba(255, 255, 255, 0.2);
        }

        .contact-section > p {
          color: rgba(255, 255, 255, 0.95);
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }

        .contact-item {
          background: rgba(255, 255, 255, 0.95);
          padding: 24px;
          border-radius: 12px;
        }

        .contact-item h4 {
          color: #2c3e50;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .contact-item p,
        .contact-item a {
          color: #34495e;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          text-decoration: none;
        }

        .contact-item a {
          color: #c9961a;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #c9961a;
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .policy-article {
            padding: 40px;
          }

          .section-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .policy-article {
            padding: 32px 24px;
          }

          .section-title {
            font-size: 1.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .section-number {
            width: 44px;
            height: 44px;
            font-size: 1.125rem;
          }

          .usage-grid,
          .rights-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .cookies-table {
            font-size: 0.85rem;
          }

          .cookies-table th,
          .cookies-table td {
            padding: 12px 8px;
          }
        }

        @media (max-width: 480px) {
          .policy-article {
            padding: 24px 16px;
          }

          .lead-text {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.375rem;
          }

          .contact-section {
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}

export default PrivacyPolicyContent;
