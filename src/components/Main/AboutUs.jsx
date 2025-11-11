import React from "react";

function AboutUs() {
  return (
    <section className="eg-about section-padding">
      <div className="container text-center">
        <h2 className="about-title">NOSOTROS</h2>
        <p className="about-lead">
          En Elephant Group sabemos lo importante que es para tu negocio contar
          con productos de calidad, personalizados y a tiempo. Por eso
          trabajamos con los mejores materiales y procesos para ofrecer
          soluciones gráficas que reflejen la identidad de tu marca.
        </p>

        <div className="about-features">
          <article className="about-item">
            <div className="about-icon">
              {/* icono - garantía */}
              <svg
                viewBox="0 0 64 64"
                width="65"
                height="65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  stroke="#f7a800"
                  strokeWidth="2"
                  fill="rgba(247,168,0,0.06)"
                />
                <path
                  d="M20 34l6 6 18-18"
                  stroke="#f7a800"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4>CALIDAD GARANTIZADA</h4>
            <p>
              Materiales y acabados que aseguran durabilidad y excelente
              apariencia.
            </p>
          </article>

          <article className="about-item">
            <div className="about-icon">
              {/* icono - personalización */}
              <svg
                viewBox="0 0 64 64"
                width="65"
                height="65"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  stroke="#f7a800"
                  strokeWidth="2"
                  fill="rgba(247,168,0,0.06)"
                />
                <path
                  d="M20 44h24M20 32h24M20 20h12"
                  stroke="#f7a800"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4>PERSONALIZACIÓN TOTAL</h4>
            <p>
              Diseños a medida que comunican la esencia de tu marca en cada
              pieza.
            </p>
          </article>

          <article className="about-item">
            <div className="about-icon">
              {/* icono - tiempos de entrega */}
              <svg
                viewBox="0 0 64 64"
                width="65"
                height="65"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  stroke="#f7a800"
                  strokeWidth="2"
                  fill="rgba(247,168,0,0.06)"
                />
                <path
                  d="M32 18v16l10 6"
                  stroke="#f7a800"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4>TIEMPOS DE ENTREGA RÁPIDOS</h4>
            <p>
              Procesos optimizados para cumplir plazos sin sacrificar calidad.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
