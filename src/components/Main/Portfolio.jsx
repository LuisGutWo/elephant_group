/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

// Datos de productos optimizados para SEO
const portfolioData = [
  {
    id: 1,
    title: "LETREROS",
    subtitle: "publicitarios y corporativos",
    description: "Para destacar tu negocio y atraer clientes.",
    image: "/assets/light/imgs/works/corte_el_brioche.webp",
    category: "Letreros",
    keywords:
      "letreros publicitarios, letreros corporativos, señalización comercial Viña del Mar, Valparaiso y V Region",
    priceRange: "Desde $25.000",
    brand: "Elephant Group",
  },
  {
    id: 2,
    title: "SEÑALÉTICAS",
    subtitle: "industriales",
    description: "Cumple normativa y mejora la seguridad.",
    image: "/assets/light/imgs/works/letrero_covisa.webp",
    category: "Señaléticas",
    keywords:
      "señalética industrial, señalización de seguridad, letreros corporativos Viña del Mar, Valparaiso y V Region",
    priceRange: "Desde $18.000",
    brand: "Elephant Group",
  },
  {
    id: 3,
    title: "ADHESIVOS",
    subtitle: "personalizados",
    description: "Refuerza tu marca en cada espacio.",
    image: "/assets/light/imgs/works/Adhesivos-Personalizarme.webp",
    category: "Adhesivos",
    keywords:
      "adhesivos personalizados, vinilos publicitarios, etiquetas corporativas Viña del Mar, Valparaiso y V Region",
    priceRange: "Desde $8.000",
    brand: "Elephant Group",
  },
];

function Portfolio() {
  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <section
      className="eg-portfolio section-padding sub-bg"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label="Catálogo de implementos publicitarios"
    >
      {/* Schema.org Organization Data */}
      <div
        itemScope
        itemType="https://schema.org/Organization"
        style={{ display: "none" }}
      >
        <span itemProp="name">Elephant Group</span>
        <span itemProp="description">
          Fabricación de implementos publicitarios en Viña del Mar, Valparaiso y
          V Region
        </span>
        <span itemProp="telephone">+56951631370</span>
        <span itemProp="areaServed">Viña del Mar, Valparaiso y V Region</span>
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="addressLocality">
            Viña del Mar, Valparaiso y V Region
          </span>
          <span itemProp="addressRegion">
            Viña del Mar, Valparaiso y V Region
          </span>
          <span itemProp="addressCountry">CL</span>
        </div>
      </div>

      <div className="container">
        {/* Header Section Unificado */}
        <div className="eg-portfolio-header">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="eg-section-title" itemProp="name">
                Nuestros Productos{" "}
              </h2>
              <meta
                itemProp="numberOfItems"
                content={String(portfolioData.length)}
              />
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="eg-portfolio-grid">
          <div className="row justify-content-center g-4">
            {portfolioData.map((item, index) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="eg-portfolio-card">
                  <div className="eg-portfolio-image">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.subtitle} | Elephant Group Valparaíso`}
                      loading="lazy"
                      onClick={() => handleImageClick(item.image)}
                      itemProp="image"
                      role="button"
                      tabIndex="0"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleImageClick(item.image);
                        }
                      }}
                      aria-label={`Ver imagen ampliada de ${item.title}`}
                    />
                    <div className="eg-portfolio-overlay">
                      <div
                        className="eg-portfolio-category"
                        itemProp="category"
                      >
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <div className="eg-portfolio-content text-center">
                    <div className="eg-portfolio-header-badge">
                      <h3 className="eg-portfolio-card-title" itemProp="name">
                        {item.title}
                      </h3>
                    </div>

                    <p
                      className="eg-portfolio-card-description"
                      itemProp="description"
                    >
                      {item.description}
                    </p>

                    {/* Schema.org adicional */}
                    <div style={{ display: "none" }}>
                      <span
                        itemProp="brand"
                        itemScope
                        itemType="https://schema.org/Brand"
                      >
                        <span itemProp="name">{item.brand}</span>
                      </span>
                      <div
                        itemProp="offers"
                        itemScope
                        itemType="https://schema.org/AggregateOffer"
                      >
                        <span itemProp="priceCurrency" content="CLP">
                          CLP
                        </span>
                        <span
                          itemProp="lowPrice"
                          content={item.priceRange.match(/\d+/)?.[0]}
                        >
                          {item.priceRange}
                        </span>
                        <span
                          itemProp="availability"
                          content="https://schema.org/InStock"
                        >
                          En Stock
                        </span>
                        <span itemProp="priceValidUntil" content="2025-12-31">
                          2025
                        </span>
                      </div>
                      <div
                        itemProp="aggregateRating"
                        itemScope
                        itemType="https://schema.org/AggregateRating"
                      >
                        <span itemProp="ratingValue">4.8</span>
                        <span itemProp="bestRating">5</span>
                        <span itemProp="ratingCount">127</span>
                      </div>
                      <meta
                        itemProp="sku"
                        content={`EG-${item.category.toUpperCase()}-${item.id}`}
                      />
                      <meta itemProp="keywords" content={item.keywords} />
                    </div>

                    <div className="eg-portfolio-actions">
                      <Link
                        href="/portfolio"
                        className="eg-portfolio-btn"
                        aria-label={`Ver catálogo completo de ${item.title.toLowerCase()} en Viña del Mar, Valparaiso y V Region`}
                        title={`${item.priceRange} - ${item.title} ${item.subtitle} en Viña del Mar, Valparaiso y V Region`}
                      >
                        Ver Catálogo
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <meta itemProp="position" content={String(index + 1)} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Breadcrumb Schema.org */}
        <div
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          style={{ display: "none" }}
        >
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link itemProp="item" href="/">
              <span itemProp="name">Inicio</span>
            </Link>
            <meta itemProp="position" content="1" />
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link itemProp="item" href="/portfolio">
              <span itemProp="name">Portafolio</span>
            </Link>
            <meta itemProp="position" content="2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
