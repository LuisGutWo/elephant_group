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
                width={100}
                height={100}
              />
            </div>
            <h3 className="about-item-title" style={{ fontSize: "1rem" }}>
              MATERIALES PROFESIONALES Y DURADEROS
            </h3>
          </article>

          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
            <div className="about-icon">
              {/* icono - personalización (brocha/palette) */}
              <Image
                src="/assets/light/imgs/serv-icons/tool-icon.svg"
                alt="Icono de personalización"
                width={100}
                height={100}
              />
            </div>
            <h3 className="about-item-title" style={{ fontSize: "1rem" }}>
              FABRICACIÓN PROPIA (NO INTERMEDIARIOS)
            </h3>
          </article>

          <article className="about-item" style={{ paddingBottom: "2.5rem" }}>
            <div className="about-icon">
              {/* icono - rapidez (reloj/ráfaga) */}
              <Image
                src="/assets/light/imgs/serv-icons/clock-icon.svg"
                alt="Icono de rapidez"
                width={100}
                height={100}
              />
            </div>
            <h3 className="about-item-title" style={{ fontSize: "1rem" }}>
              PRODUCCIÓN ÁGIL SEGÚN NECESIDAD
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
