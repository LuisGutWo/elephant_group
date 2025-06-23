import React, { useEffect } from "react";
import Link from "next/link";
import { facebookSvg, instagramSvg } from "@/data/icons";

function Footer({ lightMode, subBg }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set(".footer-container", { yPercent: -30 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(".footer-container", { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: "main",
        start: "bottom bottom",
        end: "+=30%",
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer className={subBg ? "sub-bg pt-80" : ""}>
      <section className="footer-container">
        <article className="container pb-80 pt-80">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Dirección</h6>
                </div>
                <div className="text">
                  <p>3 Oriente 974, Viña del Mar, Chile.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Contacto</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="#0">contacto@elephantgroup.cl</a>
                  </p>
                  <h5>
                    <a href="#">(+56 9) 9323 9203</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Redes Sociales</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <a href="https://web.facebook.com/search/top?q=elephant%20group">
                    {facebookSvg}
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/elephantgroupchile/?hl=es">
                    {instagramSvg}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="sub-footer pt-20 pb-20 mb-0 bord-thin-top onbottom bg-dark">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center flex-column flex-md-row">
              <div className="col-lg-4">
                <div className="logo">
                  <Link href="/">
                    <img
                      src={`/dark/assets/imgs/logo-footer-${
                        lightMode ? "dark" : "dark"
                      }.webp`}
                      alt=""
                      className="icon-img-footer img-fluid p-0"
                      style={{ width: "3rem", height: "auto" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex justify-content-end">
                  <div className="text">
                    <p className="footer-text">
                      Copyright© {new Date().getFullYear()} | LAG media | Todos
                      los derechos reservados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
