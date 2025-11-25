import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/data/Main/products.json";

function Products() {
  const [hoveredCard, setHoveredCard] = useState(null);

  if (!data || !Array.isArray(data) || data.length === 0) {
    throw new Error("data is not defined or is empty");
  }

  // Datos enriquecidos con keywords SEO
  const enrichedData = data.map((item) => ({
    ...item,
    keywords: `${item.title.toLowerCase()}`,
    brand: "Elephant Group",
    availability: "https://schema.org/InStock",
    priceRange: item.id <= 3 ? "$15.000 - $45.000" : "$5.000 - $25.000",
  }));

  try {
    return (
      <section
        className="modern-products-section section-padding main-bg"
        itemScope
        itemType="https://schema.org/ItemList"
        aria-label="Productos publicitarios destacados"
      >
        <div className="container ontop">
          {/* Header de sección unificado */}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="mb-80">
                <span className="eg-section-eyebrow">Bestsellers 2025</span>
                <h2 className="eg-section-title" itemProp="name">
                  Productos <span className="accent-text">Publicitarios</span>{" "}
                  Más Vendidos
                </h2>
                <p className="eg-section-description" itemProp="description">
                  <strong>Tótems</strong>, <strong>pendones roller</strong>,{" "}
                  <strong>señalética personalizada</strong> y{" "}
                  <strong>stickers</strong> en Viña del Mar, Valparaiso y V
                  Region. Los productos más solicitados por empresas para
                  promoción y branding efectivo.
                </p>
                <meta
                  itemProp="numberOfItems"
                  content={String(enrichedData.length)}
                />
              </div>
            </div>
          </div>

          {/* Grid de productos optimizado */}
          <div className="eg-products-grid">
            {enrichedData.map((item, idx) => (
              <article
                key={item.id}
                className={`eg-product-card${
                  hoveredCard === idx ? " hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="eg-product-image-wrap">
                  <Image
                    src={item.image}
                    alt={`${item.title}${
                      item.subtitle ? " - " + item.subtitle : ""
                    } | Elephant Group Valparaíso, Viña del Mar, V Región`}
                    width={400}
                    height={300}
                    className="eg-product-image"
                    itemProp="image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    sizes="(max-width: 600px) 100vw, 400px"
                    priority={idx < 3}
                  />
                  <span
                    className="eg-product-badge"
                    aria-label={`Producto destacado: ${item.title}`}
                  >
                    {item.number}
                  </span>
                </div>
                <div className="eg-product-content">
                  <h3 className="eg-product-title" itemProp="name">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span
                      className="eg-product-subtitle"
                      itemProp="description"
                    >
                      {item.subtitle}
                    </span>
                  )}
                  <div className="eg-product-meta">
                    <meta itemProp="priceCurrency" content="CLP" />
                  </div>
                  <div className="eg-product-actions">
                    <Link
                      href="/quote"
                      className="eg-btn eg-btn-primary"
                      aria-label={`Solicitar cotización de ${item.title}`}
                      title={`Cotizar ${item.title}`}
                    >
                      Cotizar
                    </Link>
                    <Link
                      href="/portfolio"
                      className="eg-btn eg-btn-secondary"
                      aria-label={`Ver más productos similares a ${item.title}`}
                      title="Ver catálogo completo de productos"
                    >
                      Ver más
                    </Link>
                  </div>
                  {/* SEO meta ocultos */}
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
                      itemType="https://schema.org/Offer"
                    >
                      <span itemProp="priceCurrency" content="CLP">
                        CLP
                      </span>
                      <span
                        itemProp="price"
                        content={item.priceRange.match(/\d+/)?.[0]}
                      >
                        {item.priceRange}
                      </span>
                      <link itemProp="availability" href={item.availability} />
                    </div>
                    <meta itemProp="sku" content={`EG-PROD-${item.id}`} />
                    <meta
                      itemProp="category"
                      content="Implementos Publicitarios"
                    />
                    <meta itemProp="keywords" content={item.keywords} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to action optimizado */}
          <div className="row mt-80">
            <div className="col-12 text-center">
              <div className="modern-cta">
                <p className="cta-text">
                  ¿Necesitas <strong>gigantografías</strong>,{" "}
                  <strong>lienzos</strong> o{" "}
                  <strong>displays personalizados</strong>?
                </p>
                <Link
                  href="/quote"
                  className="btn-cta-modern"
                  aria-label="Solicitar cotización personalizada de productos publicitarios"
                  title="Cotización gratuita en 24 horas - Elephant Group"
                >
                  <span>Solicitar Cotización Gratuita</span>
                  <div className="btn-glow"></div>
                </Link>
                <p className="cta-helper-text">
                  Respuesta en <strong>24 horas</strong> • Envío a toda la{" "}
                  <strong>Región de Valparaíso</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="error-container">
        <h3>Error al cargar productos</h3>
        <p>Por favor, inténtalo nuevamente.</p>
      </div>
    );
  }
}

export default Products;
