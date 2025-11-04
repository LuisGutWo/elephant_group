import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import { leftArrowPaginationSvg, rightArrowPaginationSvg } from "@/data/icons";
// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import data from "@/data/Main/portfolioGalleryPage.json";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  Row,
} from "react-bootstrap";

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay, Parallax],
  slidesPerView: 3,
  spaceBetween: 90,
  parallax: true,
  autoplay: { delay: 3000 },
  loop: true,
  speed: 1500,
  centeredSlides: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".work-carsouel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".work-carsouel .swiper-button-next",
    prevEl: ".work-carsouel .swiper-button-prev",
  },
};

function Portfolio({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const [tooltipImage, setTooltipImage] = useState(null);

  const handleImageClickOpenTooltip = (item) => {
    setTooltipImage(item);
  };

  const handleCloseTooltip = () => {
    setTooltipImage(null);
  };

  return (
    <section className="work-carsouel section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row d-flex justify-content-center justify-content-center">
            <div className="col-lg-6">
              {/* <h6 className="sub-title mb-15">Portafolio</h6> */}
              <h2 className="fz-40">NUESTROS PRODUCTOS</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12">
            <CardGroup className="g-4 d-flex justify-content-center gap-5">
              <Card
                style={{
                  maxWidth: "20rem",
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                <Card.Img
                  style={{
                    height: "19rem",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "all 0.3s ease-in-out",
                      WebkitTransform: "scale(1.1)",
                      WebkitTransition: "all 0.3s ease-in-out",
                      MozTransform: "scale(1.1)",
                      MozTransition: "all 0.3s ease-in-out",
                      msTransform: "scale(1.1)",
                      msTransition: "all 0.3s ease-in-out",
                      OTransform: "scale(1.1)",
                      OTransition: "all 0.3s ease-in-out",
                    },
                  }}
                  onClick={() => {
                    window.open(
                      "/light/assets/imgs/works/corte_el_brioche.webp",
                      "_blank"
                    );
                  }}
                  src="/light/assets/imgs/works/corte_el_brioche.webp"
                  alt="Elephant Group - Corte Laser El Brioche"
                  variant="top"
                  loading="lazy"
                />
                <div
                  className="text-center text-light"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    backgroundColor: "#282828dc",
                    width: "100%",
                    padding: "0.4rem",
                    height: "fit-content",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h1 style={{ fontSize: "1.3rem", marginTop: "0.5rem" }}>
                    LETREROS
                  </h1>
                  <h2 style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                    publicitarios y corporativos
                  </h2>
                </div>
                <Card.Body className="text-center bg-transparent border-0 py-3 px-0">
                  <Card.Text
                    style={{
                      maxWidth: "20rem",
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      border: "none",
                      fontSize: "14px",
                    }}
                  >
                    Diseños personalizados en materiales como trovicel, acrílico
                    y aluminio compuesto.
                  </Card.Text>
                </Card.Body>
                <CardFooter
                  className="overlay d-flex justify-content-center align-items-center border-0"
                  style={{
                    backgroundColor: "transparent",
                    alignContent: "center",
                  }}
                >
                  <Link
                    href="/light/page-portfolio"
                    className="btn btn-sm text-light top__navbar-button"
                    style={{
                      pointerEvents: "auto",
                      borderRadius: "5px",
                      padding: "0.2rem 1.6rem",
                      fontSize: "1rem",
                      width: "fit-content",
                      fontWeight: "bold",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 3,
                    }}
                  >
                    MAS DETALLES
                  </Link>
                </CardFooter>
              </Card>
              <Card
                style={{
                  maxWidth: "20rem",
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                <Card.Img
                  style={{
                    height: "19rem",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "all 0.3s ease-in-out",
                      WebkitTransform: "scale(1.1)",
                      WebkitTransition: "all 0.3s ease-in-out",
                      MozTransform: "scale(1.1)",
                      MozTransition: "all 0.3s ease-in-out",
                      msTransform: "scale(1.1)",
                      msTransition: "all 0.3s ease-in-out",
                      OTransform: "scale(1.1)",
                      OTransition: "all 0.3s ease-in-out",
                    },
                  }}
                  onClick={() => {
                    window.open(
                      "/light/assets/imgs/works/letrero_covisa.webp",
                      "_blank"
                    );
                  }}
                  src="/light/assets/imgs/works/letrero_covisa.webp"
                  alt="Elephant Group - Corte Laser El Brioche"
                  variant="top"
                  loading="lazy"
                />
                <div
                  className="text-center text-light"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    backgroundColor: "#282828dc",
                    width: "100%",
                    padding: "0.4rem",
                    height: "fit-content",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h1 style={{ fontSize: "1.3rem", marginTop: "0.5rem" }}>
                    SEÑALETICAS
                  </h1>
                  <h2 style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                    industriales
                  </h2>
                </div>
                <Card.Body className="text-center bg-transparent border-0 py-3 px-0">
                  <Card.Text>
                    Soluciones claras y duraderas para interiores y exteriores.
                  </Card.Text>
                </Card.Body>
                <CardFooter
                  className="overlay d-flex justify-content-center align-items-center border-0"
                  style={{
                    backgroundColor: "transparent",
                    alignContent: "center",
                  }}
                >
                  <Link
                    href="/light/page-portfolio"
                    className="btn btn-sm text-light top__navbar-button"
                    style={{
                      pointerEvents: "auto",
                      borderRadius: "5px",
                      padding: "0.2rem 1.6rem",
                      fontSize: "1rem",
                      width: "fit-content",
                      fontWeight: "bold",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 3,
                    }}
                  >
                    MAS DETALLES
                  </Link>
                </CardFooter>
              </Card>
              <Card
                style={{
                  maxWidth: "20rem",
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                <Card.Img
                  style={{
                    height: "19rem",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "all 0.3s ease-in-out",
                      WebkitTransform: "scale(1.1)",
                      WebkitTransition: "all 0.3s ease-in-out",
                      MozTransform: "scale(1.1)",
                      MozTransition: "all 0.3s ease-in-out",
                      msTransform: "scale(1.1)",
                      msTransition: "all 0.3s ease-in-out",
                      OTransform: "scale(1.1)",
                      OTransition: "all 0.3s ease-in-out",
                    },
                  }}
                  onClick={() => {
                    window.open(
                      "/light/assets/imgs/works/Adhesivos-Personalizarme.webp",
                      "_blank"
                    );
                  }}
                  src="/light/assets/imgs/works/Adhesivos-Personalizarme.webp"
                  alt="Elephant Group - Corte Laser El Brioche"
                  variant="top"
                  loading="lazy"
                />
                <div
                  className="text-center text-light"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    backgroundColor: "#282828dc",
                    width: "100%",
                    padding: "0.4rem",
                    height: "fit-content",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h1 style={{ fontSize: "1.3rem", marginTop: "0.5rem" }}>
                    ADHESIVOS
                  </h1>
                  <h2 style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                    personalizados
                  </h2>
                </div>
                <Card.Body className="text-center bg-transparent border-0 py-3 px-0">
                  <Card.Text>
                    Desde etiquetas hasta gráficos para vidrieras ideales para
                    tu marca.
                  </Card.Text>
                </Card.Body>
                <CardFooter
                  className="overlay d-flex justify-content-center align-items-center border-0"
                  style={{
                    backgroundColor: "transparent",
                    alignContent: "center",
                  }}
                >
                  <Link
                    href="/light/page-portfolio"
                    className="btn btn-sm text-light top__navbar-button"
                    style={{
                      pointerEvents: "auto",
                      borderRadius: "5px",
                      padding: "0.2rem 1.6rem",
                      fontSize: "1rem",
                      width: "fit-content",
                      fontWeight: "bold",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 3,
                    }}
                  >
                    MAS DETALLES
                  </Link>
                </CardFooter>
              </Card>

              {/* {loadSwiper && data?.gallery && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-w"
                  className="swiper-container"
                >
                  {data.gallery.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="item">
                        <div
                          className="img"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleImageClickOpenTooltip(item)}
                        >
                          <img
                            src={item.image}
                            alt={item.title ? item.title : "Portfolio Image"}
                          />
                          <div className="cont">
                            <span className="mb-5">{item.year}</span>
                            <br />
                            <span className="mb-5">{item.type}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )} */}
            </CardGroup>
          </div>
          {/* <div className="col-lg-12 d-flex align-items-center justify-content-center mt-60">
            <div className="full-width">
              <div className="d-flex justify-content-center align-items-center">
                <div className="swiper-controls arrow-out d-flex justify-content-center align-items-center">
                  <div
                    className="swiper-button-prev"
                    tabIndex="0"
                    role="button"
                    aria-label="Previous slide"
                  >
                    <span className="left">{leftArrowPaginationSvg}</span>
                  </div>
                  <div
                    className="swiper-button-next ml-50"
                    tabIndex="0"
                    role="button"
                    aria-label="Next slide"
                  >
                    <span className="right">{rightArrowPaginationSvg}</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* Tooltip Modal */}
        {/* {tooltipImage && (
          <div className="tooltip-modal" onClick={handleCloseTooltip}>
            <div
              className="tooltip-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="tooltip-image-container">
                <img
                  src={tooltipImage.image}
                  alt={
                    tooltipImage.title ? tooltipImage.title : "Tooltip Image"
                  }
                  className="tooltip-image"
                />
                <button
                  onClick={handleCloseTooltip}
                  className="tooltip-close-button"
                  aria-label="Cerrar"
                >
                  &times;
                </button>
                <div className="tooltip-text">
                  <span className="mb-5">{tooltipImage.year}</span>
                  <br />
                  <span className="mb-5">{tooltipImage.type}</span>
                  <br />
                  <Link
                    href="/light/page-portfolio"
                    className="btn btn-sm btn-warning"
                    style={{ marginTop: "10px" }}
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}

export default Portfolio;
