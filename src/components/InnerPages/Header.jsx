import React from "react";

function Header({ data, subBg, background }) {
  if (!data) {
    throw new Error("Data is null in Header component");
  }
  if (!data.title || !data.subTitle || !data.text) {
    throw new Error("Data is missing required properties in Header component");
  }
  return (
    <header className="eg-header-base">
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${background || data.background})`,
        }}
        aria-hidden="true"
      />
      <div className="background-img" />
      <div className="container mt-80">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="caption">
              <p className="eg-header-eyebrow">{data.subTitle}</p>
              <h1 className="eg-header-title">{data.title}</h1>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="eg-header-description">
              <p>
                Impulsa tu marca con soluciones publicitarias a medida. En
                Elephant Group, te guiamos de principio a fin para que tu
                empresa destaque con una imagen profesional y efectiva.
              </p>
              <br />
              <p>
                Somos expertos en señalética, material POP, gigantografías y
                merchandising en Viña del Mar, Valparaiso y V Region. Confía en
                nuestro equipo para potenciar tu presencia y captar más
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee opcional, si se requiere, puede agregarse aquí */}
    </header>
  );
}

export default Header;
