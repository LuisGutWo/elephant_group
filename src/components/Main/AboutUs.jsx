import React from "react";

function AboutUs() {
  return (
    <section
      className="eg-about section-padding"
      style={{ paddingBottom: "5rem" }}
    >
      <div className="container text-center">
        <h2 className="eg-section-title">¿Por qué elegir Elephant Group?</h2>
        <p
          className="eg-section-description aboutus-description-wide"
          style={{
            maxWidth: "80ch",
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          En <strong>Elephant Group</strong> somos especialistas en{" "}
          <strong>soluciones gráficas y publicitarias</strong> para empresas en{" "}
          <strong>Viña del Mar, Valparaiso y V Region</strong>. Nos enfocamos en
          entregar <strong>productos personalizados</strong>, de alta calidad y
          con tiempos de entrega rápidos, para que tu marca destaque y logre sus
          objetivos comerciales. Nuestro compromiso es acompañarte en cada
          etapa, desde el diseño hasta la instalación, asegurando resultados que
          potencian tu imagen y comunicación visual en la{" "}
          <strong>V Region</strong>.
        </p>

        <div className="about-features">
          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
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
            <h3 className="about-item-title" style={{ fontSize: "1.2rem" }}>
              Calidad y Durabilidad
            </h3>
            <p
              className="about-item-desc"
              style={{ fontSize: "1rem", margin: "0 auto", maxWidth: "90%" }}
              itemProp="description"
            >
              Materiales premium y tecnología avanzada para que tu marca siempre
              luzca profesional y resistente.
            </p>
          </article>

          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
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
            <h3 className="about-item-title" style={{ fontSize: "1.2rem" }}>
              Personalización a tu Medida
            </h3>
            <p
              className="about-item-desc"
              style={{ fontSize: "1rem", margin: "0 auto", maxWidth: "90%" }}
              itemProp="description"
            >
              Soluciones gráficas únicas, adaptadas a lo que tu empresa
              realmente necesita.
            </p>
          </article>

          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
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
            <h3 className="about-item-title" style={{ fontSize: "1.2rem" }}>
              Entrega Rápida y Cumplimiento
            </h3>
            <p
              className="about-item-desc"
              style={{ fontSize: "1rem", margin: "0 auto", maxWidth: "90%" }}
              itemProp="description"
            >
              Entregas puntuales y ágiles, sin perder calidad. Cumplimos lo que
              prometemos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
