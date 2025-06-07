import React from 'react'

function HeaderPortfolio({ data }) {
  if (!data) {
    throw new Error("Data is null or undefined in HeaderPortfolio component");
  }

  if (!data.subTitle || !data.title) {
    throw new Error("Data is missing required properties in HeaderPortfolio component");
  }

  return (
    <header className="work-header section-padding pb-0">
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

export default HeaderPortfolio
