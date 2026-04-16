import React from "react";
import Image from "next/image";
import Link from "next/link";
//= Data
import data from "@/data/Main/services.json";

function Services() {
  return (
    <section className="services main-bg ontop bord-thin-top bord-thin-bottom">
      <div className="container-fluid text-center">
        {/* Header de sección unificado */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-8 text-center mb-4">
            <span className="eg-section-eyebrow">Servicios Destacados</span>
            <h2 className="eg-section-title">
              Soluciones Publicitarias Integrales
            </h2>
            <p className="eg-section-description">
              Diseño, fabricación e instalación de implementos publicitarios,
              señalética, letreros y material POP para empresas en Viña del Mar,
              Valparaiso y V Region. Servicio profesional y personalizado.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-50">
          {data.map((item) => (
            <div className="item-bord col-lg-4 col-md-8" key={item.id}>
              <Link
                href="/services"
                className="d-flex flex-wrap flex-column justify-content-center align-items-center arrow mt-40"
              >
                <div className="mb-40">
                  <Image
                    src={`/assets/light${item.image}`}
                    alt="Service Icon Image - Elephant Group"
                    className="img-fluid w-100 h-100 mb-20"
                    width={100}
                    height={100}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "100%",
                      height: "auto",
                    }}
                    priority={false}
                  />
                </div>
                <h4
                  className="mb-15"
                  key={item.id}
                  style={{ color: "#f7a800" }}
                >
                  {item.title}
                </h4>
                <h6 className="mb-15">
                  {item.subtitle}

                  <span className="dot">
                    <i className="fa fa-angle-right fs-5 ms-2" />
                  </span>
                </h6>
                <p>{item.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
