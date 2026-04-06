import React from "react";

function Header() {
  return (
    <header
      className="eg-header-base"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div
        className="background-img"
        style={{
          backgroundImage: "url(/assets/dark/imgs/background/work-127.webp)",
        }}
        aria-hidden="true"
      />
      <div className="container mt-80">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="caption">
              <p className="eg-header-eyebrow" itemProp="about">
                Página de Contacto
              </p>
              <h1 className="eg-header-title" itemProp="headline" tabIndex={0}>
                Ponte en contacto con nosotros
                <br />
              </h1>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="eg-header-description" itemProp="description">
              <p>
                <strong>¿Tienes un proyecto en mente?</strong> Completa el
                formulario o escríbenos por WhatsApp al{" "}
                <strong>+56 9 5163 1370</strong>. Te responderemos en menos de
                24 horas con una propuesta personalizada para tu empresa en la V
                Región.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
