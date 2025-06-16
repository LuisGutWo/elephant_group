import React, { useState, useEffect } from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Parallax,
  Keyboard,
} from "swiper/modules";
//= Components
import StatementSplitter from "../Common/StatementSplitter";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import data from "@/data/Main/header.json";

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax, Keyboard],
  Keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    waitForTransition: true,
  },
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
function Header() {
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
                style={{ position: "relative", overflow: "hidden" }}>
                {item.backgroundVideo ? (
                  <video
                    autoPlay
                    playsInline
                    preload="auto"
                    lazy="true"
                    disableRemotePlayback
                    disablePictureInPicture
                    loop
                    muted
                    className="bg-video"
                    alt="Background Autonivelante banners videos"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 0,
                    }}>
                    <source
                      src={
                        window.matchMedia("(max-width: 768px)").matches
                          ? item.backgroundVideoMobile
                          : item.backgroundVideo
                      }
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url(${
                        window.matchMedia("(max-width: 768px)").matches
                          ? item?.backgroundMobile
                          : item?.background
                      })`,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 0,
                    }}
                  />
                )}
                <div
                  className="container"
                  style={{ position: "relative", zIndex: 1 }}>
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="caption">
                        <img
                          src="/light/assets/imgs/logo-light.webp"
                          alt="Elephant Group - Designe and Print Solutions Logo"
                          className="logo-webp img-responsive w-25"
                          data-swiper-parallax="0.5"
                        />
                        <h1 className="text-light">
                          <StatementSplitter statement={item.title || ""} />
                        </h1>
                        <h2 className="text-light ms-1 text-uppercase fw-400">
                          <StatementSplitter statement={item.subtitle || ""} />
                        </h2>
                        <p className="sub-title">{item.text || ""}</p>
                      </div>
                    </div>
                  </div>
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
