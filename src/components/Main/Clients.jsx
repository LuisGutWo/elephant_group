import React, { useState, useEffect } from "react";
// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
// Data
import data from "@/data/Main/clients.json";

const swiperOptions = {
  modules: [Navigation, Autoplay, Parallax],
  slidesPerView: 5,
  speed: 1500,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  parallax: true,
  spaceBetween: 40,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};

function Clients({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

return (
    <section className="clients-carso section-padding pt-100">
        <div className="container">
            <article className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="text-center mb-70">
                        <h6 className="fz-20 fw-400">
                            Mas de <span className="fw-600">100+ Clientes</span> confían en
                            nosotros en todo Chile
                        </h6>
                    </div>
                </div>
            </article>
            <article className="swiper5">
                {loadSwiper && data && data.length > 0 && (
                    <Swiper
                        {...swiperOptions}
                        id="content-carousel-container-unq-clients"
                        className="swiper-container d-flex justify-content-end align-items-end"
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="item d-flex justify-content-center align-items-center"
                                    style={{
                                        height: "150px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        className="img icon-img-150"
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <img
                                            src={`/${lightMode ? "light" : "dark"}${item}`}
                                            alt="Elephant Group clients logos carousel images"
                                            style={{
                                                display: "block",
                                                margin: "0 auto",
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                objectPosition: "center",
                                                maxWidth: "150px",
                                                maxHeight: "150px",
                                            }}
                                            className="img-fluid"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </article>
        </div>
    </section>
);
}

export default Clients;
