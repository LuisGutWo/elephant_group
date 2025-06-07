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
  watchSlidesVisibility: true,
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

  return (
    <section className="work-carsouel section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <h6 className="sub-title mb-15">Portafolio</h6>
              <h2 className="fz-50">Nuestros trabajos.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12">
            <div className="work-crus work-crus3 random out">
              {loadSwiper && data?.gallery && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-w"
                  className="swiper-container"
                >
                  {data.gallery.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="item">
                        <div className="img">
                          <img
                            src={item.image}
                            alt={item.title ? item.title : "Portfolio Image"}
                          />
                          <div className="cont">
                            <span className="mb-5">{item.year}</span>
                            <br />
                            <span className="mb-5">{item.type}</span>
                          </div>
                          <Link
                            href="/light/page-contact"
                            className="plink"
                          ></Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center mt-60">
            <div className="full-width">
              <div className="d-flex justify-content-end justify-end">
                <div className="swiper-controls arrow-out d-flex">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
