import React from "react";

function AboutUs() {
  return (
    <section className="eg-about section-padding">
      <div className="container text-center">
        <h2 className="eg-section-title">¿Por qué elegir Elephant Group?</h2>
        <p className="eg-section-description">
          En <strong>Elephant Group</strong> somos especialistas en{" "}
          <strong>soluciones gráficas y publicitarias</strong> para empresas en{" "}
          <strong>Valparaíso, Viña del Mar y toda la V Región</strong>. Nos
          enfocamos en entregar <strong>productos personalizados</strong>, de
          alta calidad y con tiempos de entrega rápidos, para que tu marca
          destaque y logre sus objetivos comerciales. Nuestro compromiso es
          acompañarte en cada etapa, desde el diseño hasta la instalación,
          asegurando resultados que potencian tu imagen y comunicación visual en
          la <strong>V Región</strong>.
        </p>

        <div className="about-features">
          <article className="about-item">
            <div className="about-icon">
              {/* icono - calidad (medalla/check) */}
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
                  r="28"
                  stroke="#f7a800"
                  strokeWidth="2.2"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="20"
                  stroke="#f7a800"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M24 34l7 7 13-13"
                  stroke="#f7a800"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4>Calidad y Durabilidad</h4>
            <p>
              Utilizamos materiales premium y tecnología avanzada para
              garantizar <strong>productos publicitarios resistentes</strong> y
              de excelente presentación, que potencian la imagen de tu empresa
              en <strong>Valparaíso, Viña del Mar y la V Región</strong>.
            </p>
          </article>

          <article className="about-item">
            <div className="about-icon">
              {/* icono - personalización (ajuste/deslizador) */}
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
                  r="28"
                  stroke="#f7a800"
                  strokeWidth="2.2"
                  fill="none"
                />
                <circle
                  cx="44"
                  cy="20"
                  r="4"
                  stroke="#f7a800"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="20"
                  cy="32"
                  r="4"
                  stroke="#f7a800"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="4"
                  stroke="#f7a800"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="8"
                  y1="32"
                  x2="16"
                  y2="32"
                  stroke="#f7a800"
                  strokeWidth="1.5"
                />
                <line
                  x1="24"
                  y1="32"
                  x2="60"
                  y2="32"
                  stroke="#f7a800"
                  strokeWidth="1.5"
                />
                <line
                  x1="8"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="#f7a800"
                  strokeWidth="1.5"
                />
                <line
                  x1="48"
                  y1="20"
                  x2="60"
                  y2="20"
                  stroke="#f7a800"
                  strokeWidth="1.5"
                />
                <line
                  x1="8"
                  y1="44"
                  x2="40"
                  y2="44"
                  stroke="#f7a800"
                  strokeWidth="1.5"
                />
                <line
                  x1="48"
                  y1="44"
                  x2="60"
                  y2="44"
                  stroke="#f7a800"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h4>Personalización a tu Medida</h4>
            <p>
              Creamos <strong>soluciones gráficas personalizadas</strong> que
              comunican la esencia de tu marca en cada pieza, adaptándonos a tus
              necesidades y objetivos comerciales en{" "}
              <strong>Valparaíso, Viña del Mar y la V Región</strong>.
            </p>
          </article>

          <article className="about-item">
            <div className="about-icon">
              {/* icono - rapidez (reloj minimalista) */}
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
                  r="28"
                  stroke="#f7a800"
                  strokeWidth="2.2"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="20"
                  stroke="#f7a800"
                  strokeWidth="1.2"
                  fill="none"
                />
                <line
                  x1="32"
                  y1="32"
                  x2="32"
                  y2="18"
                  stroke="#f7a800"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <line
                  x1="32"
                  y1="32"
                  x2="44"
                  y2="38"
                  stroke="#f7a800"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="32" r="2.5" fill="#f7a800" />
              </svg>
            </div>
            <h4>Entrega Rápida y Cumplimiento</h4>
            <p>
              Optimizamos nuestros procesos para ofrecer{" "}
              <strong>entregas ágiles</strong> y cumplir siempre con los plazos
              acordados en{" "}
              <strong>Valparaíso, Viña del Mar y la V Región</strong>, sin
              sacrificar la calidad del resultado final.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
