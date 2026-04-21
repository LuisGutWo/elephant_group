import React, { useState, useEffect } from "react";
import Image from "next/image";
// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax, EffectFade } from "swiper/modules";
// Data
import data from "@/data/Main/clients.json";

const swiperOptions = {
  modules: [Navigation, Autoplay, Parallax, EffectFade],
  slidesPerView: 6,
  speed: 1600,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  parallax: true,
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: false,
  navigation: {
    nextEl: ".clients-next",
    prevEl: ".clients-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};

function Clients() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSwiper(true);
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      className="eg-clients-bg section-padding eg-clients-modern"
      aria-labelledby="clients-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container">
        <div className="text-center mb-5">
          <span className="eg-section-eyebrow">Confianza y Experiencia</span>
          <h2
            id="clients-heading"
            className="eg-section-title"
            itemProp="description"
          >
            Empresas que <span className="accent-color">Confían</span> en
            Nosotros
          </h2>
          <p className="eg-section-description">
            Más de{" "}
            <strong>100 empresas en Viña del Mar, Valparaíso y V Region</strong>{" "}
            han confiado en nuestros <strong>implementos publicitarios</strong>{" "}
            para potenciar su marca.
          </p>
        </div>
        <div
          className="eg-clients-carousel-wrap"
          aria-label="Empresas que confían en Elephant Group"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <meta itemProp="numberOfItems" content={data.length} />

          {!loadSwiper ? (
            <div
              className="clients-loading-minimal"
              aria-live="polite"
              aria-busy="true"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="client-skeleton-minimal"
                  role="presentation"
                />
              ))}
            </div>
          ) : (
            <Swiper
              {...swiperOptions}
              className="eg-clients-carousel"
              role="region"
              aria-label="Carrusel de logos de clientes"
            >
              {data.map((item, index) => (
                <SwiperSlide
                  key={index}
                  itemScope
                  itemType="https://schema.org/Brand"
                  itemProp="itemListElement"
                >
                  <meta itemProp="position" content={index + 1} />
                  <div className="eg-client-logo-wrap">
                    <Image
                      src={item}
                      alt={`Logo cliente ${
                        index + 1
                      } - Empresa que confía en Elephant Group para implementos publicitarios en Valparaíso, Viña del Mar y la V Region`}
                      width={160}
                      height={100}
                      className="eg-client-logo"
                      loading={index < 6 ? "eager" : "lazy"}
                      quality={90}
                      sizes="(max-width: 480px) 120px, (max-width: 991px) 140px, 160px"
                      itemProp="logo"
                      title={`Logo cliente ${index + 1} Elephant Group`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

export default Clients;
