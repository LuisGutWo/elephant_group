import React from "react";

function HeaderPortfolio({ data }) {
  if (!data) {
    throw new Error("Data is null or undefined in HeaderPortfolio component");
  }
  if (!data.subTitle || !data.title) {
    throw new Error(
      "Data is missing required properties in HeaderPortfolio component",
    );
  }
  return (
    <header
      className="eg-header-base"
      role="banner"
      aria-label="Encabezado del portafolio"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div
        className="background-img"
        style={{
          backgroundImage: "url(/assets/light/imgs/works/work_publicity.webp)",
        }}
        aria-hidden="true"
      />
      <div className="container mt-80">
        <div className="row">
          <div className="col-12">
            <div className="caption">
              <p className="eg-header-eyebrow">{data.subTitle}</p>
              <h1 className="eg-header-title" itemProp="headline">
                {data.title}
              </h1>
              {data.description && (
                <p className="eg-header-description" itemProp="description">
                  {data.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPortfolio;
