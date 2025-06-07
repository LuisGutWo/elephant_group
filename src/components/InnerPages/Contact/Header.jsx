import React from "react";

function Header() {
  return (
    <header
      className="page-header section-padding p-100 bg-img bg-overlay"
      style={{
        backgroundImage:
          "url(public/dark/assets/imgs/background/work-127.webp)" || "url(/dark/assets/imgs/background/work-127.webp)",
        minHeight: "100vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        alt: "Background Image work banner",
        position: "relative",
        zIndex: 1,
        textAlign: "left",
        padding: "100px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="sub-title">Contáctanos</h6>
              <h2 className="fz-55">
                ¡Elevemos <br /> tu marca al siguiente nivel!
              </h2>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="text">
              <p>
                Transformamos ideas en marcas memorables. Nuestro equipo te
                acompaña en cada paso para digitalizar, potenciar y dar vida a
                tus proyectos, asegurando que comuniques con impacto, alcances
                tus metas y destaques en el mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
