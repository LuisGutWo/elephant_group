import React from "react";

function HeaderPortfolio({ data }) {
  if (!data) {
    throw new Error("Data is null or undefined in HeaderPortfolio component");
  }

  if (!data.subTitle || !data.title) {
    throw new Error(
      "Data is missing required properties in HeaderPortfolio component"
    );
  }

  return (
    <header className="work-header section-padding pb-0">
      {/* Background image with opacity */}
      <div
        style={{
          backgroundImage: "url(/light/assets/imgs/works/work_publicity.webp)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 0.2, // Adjust opacity as needed
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div className="container mt-80">
        <div className="row">
          <div className="col-12">
            <div className="caption">
              <h6 className="sub-title">{data.subTitle}</h6>
              <h2>{data.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPortfolio;
