import React, { useState, useEffect } from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
//= Components
import StatementSplitter from "../Common/StatementSplitter";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import data from "@/data/Main/header.json";
import { arrowRightUpSvg } from "@/data/icons";
import Link from "next/link";

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax],
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: false,
  //     waitForTransition: true,
  //   },
  effect: "fade",
  speed: 1500,
  parallax: true,
  loop: true,
  onSwiper: function (swiper) {
    if (swiper && swiper.slides) {
      for (var i = 0; i < swiper.slides.length; i++) {
        const slide = swiper.slides[i];
        const bgImg = slide.querySelector(".bg-img");
        if (bgImg) {
          bgImg.setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      }
    }
  },
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: ".slider-prlx .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-prlx .next-ctrl",
    prevEl: ".slider-prlx .prev-ctrl",
  },
};
function Header({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    if (!loadSwiper) {
      setLoadSwiper(true);
      loadBackgroudImages();
    }
  }, [loadSwiper]);

  return (
    <header className="slider arch-slider slider-prlx">
      {loadSwiper && data && (
        <Swiper {...swiperOptions} className="swiper-container parallax-slider">
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="swiper-slide bg-img valign"
                data-swiper-parallax-opacity="0.5"
                data-swiper-parallax-scale="1.2"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  className="bg-img"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <img
                    src={item.background}
                    alt="Elephant Group - Designe and Print Solutions"
                    className="img-responsive"
                    data-swiper-parallax="0.5"
                  />
                </div>

                <div
                  className="container"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="caption">
                        <h2 className="text-light ms-1 fw-400">
                          <StatementSplitter statement={item.subtitle || ""} />
                        </h2>
                        <h1 className="text-light">
                          <StatementSplitter statement={item.title || ""} />
                        </h1>
                      </div>
                      <Link
                        className="nav-link"
                        href={`/${
                          lightMode ? "light/page-contact" : "dark/page-contact"
                        }`}
                        aria-label="Contacto"
                        style={{
                          position: "absolute",
                          inset: 0,
                          top: 100,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          zIndex: 3,
                          marginTop: "2rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          textDecoration: "none",
                        }}
                      >
                        <button
                          className="btn top__navbar-button text-light mt-30"
                          style={{
                            pointerEvents: "auto",
                            borderRadius: "10px",
                            padding: "0.2rem 1.6rem",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            fontWeight: "600",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 3,
                          }}
                        >
                          <span className="rolling-text">
                            HABLA CON UN ASESOR
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Link colocado como overlay completo para estar por encima de todo */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="setting">
        <div className="controls">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="ion-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="ion-chevron-left"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
