import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section
      className="eg-about section-padding"
      style={{ paddingBottom: "5rem" }}
    >
      <div className="container text-center">
        <h2 className="eg-section-title">Nosotros</h2>
        <p
          className="eg-section-description aboutus-description-wide"
          style={{
            maxWidth: "80ch",
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          En <strong>Elephant Group</strong> sabemos lo importante que es para
          tu negocio contar con{" "}
          <strong>productos de calidad, personalizados y a tiempo.</strong> por
          eso trabajamos con los mejores materiales, diseñamos soluciones únicas
          que reflejan tu identidad y aseguramos
          <strong>tiempos de entrega rápidos</strong>para que siempre estén un
          paso adelante{" "}
        </p>

        <div className="about-features">
          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
            <div className="about-icon">
              {/* icono - calidad (medalla/check) */}
              <Image
                src="/assets/light/imgs/serv-icons/pencil-icon.svg"
                alt="Icono de calidad"
                width={120}
                height={120}
              />
            </div>
            <h3
              className="about-item-title"
              style={{
                fontSize: "1.02rem",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textAlign: "center",
                textJustify: "auto",
                color: "#1a1a1a",
                marginBottom: "0.5rem",
                position: "relative",
                paddingLeft: "18px",
              }}
            >
              MATERIALES PROFESIONALES Y DURADEROS
            </h3>
          </article>

          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
            <div className="about-icon">
              {/* icono - personalización (brocha/palette) */}
              <Image
                src="/assets/light/imgs/serv-icons/tool-icon.svg"
                alt="Icono de personalización"
                width={120}
                height={120}
              />
            </div>
            <h3
              className="about-item-title"
              style={{
                fontSize: "1.02rem",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textAlign: "center",
                textJustify: "auto",
                color: "#1a1a1a",
                marginBottom: "0.5rem",
                position: "relative",
                paddingLeft: "18px",
              }}
            >
              FABRICACIÓN PROPIA (NO INTERMEDIARIOS)
            </h3>
          </article>

          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
            <div className="about-icon">
              {/* icono - rapidez (reloj/ráfaga) */}
              <Image
                src="/assets/light/imgs/serv-icons/clock-icon.svg"
                alt="Icono de rapidez"
                width={120}
                height={120}
              />
            </div>
            <h3
              className="about-item-title"
              style={{
                fontSize: "1.02rem",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textAlign: "center",
                textJustify: "auto",
                color: "#1a1a1a",
                marginBottom: "0.5rem",
                position: "relative",
                paddingLeft: "18px",
              }}
            >
              PRODUCCIÓN ÁGIL SEGÚN NECESIDAD
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
