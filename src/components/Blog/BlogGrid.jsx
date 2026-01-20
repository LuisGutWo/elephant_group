import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import articlesData from "@/data/blog-articles.json";

function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Mapeo de imágenes por categoría
  const getCategoryImage = (category) => {
    const imageMap = {
      "Diseño Gráfico": "/assets/dark/imgs/works/diseno_servicestab.webp",
      Señalética: "/assets/dark/imgs/works/letrero_restaurante.webp",
      Marketing: "/assets/dark/imgs/works/publicidad_tela_pvc_1.webp",
      Impresión: "/assets/dark/imgs/works/impresion_image_covisa.webp",
      Branding: "/assets/dark/imgs/works/cafeteria_violeta.webp",
      Publicidad: "/assets/dark/imgs/works/letreros_varios.webp",
      Packaging: "/assets/dark/imgs/works/corte_casa_colibri.webp",
      Merchandising: "/assets/dark/imgs/works/grafica_adehesiva_cooler.webp",
    };
    return (
      imageMap[category] ||
      "/assets/dark/imgs/works/letreros_muestra_varios.webp"
    );
  };

  // Filtrar artículos por categoría
  const filteredArticles =
    selectedCategory === "Todos"
      ? articlesData.articles
      : articlesData.articles.filter(
          (article) => article.category === selectedCategory,
        );

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="blog-grid section-padding"
      itemScope
      itemType="https://schema.org/Blog"
    >
      <div className="container">
        {/* Filtros de categoría */}
        <div className="category-filters mb-60">
          <div className="filters-wrapper">
            {articlesData.categories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
                aria-label={`Filtrar por ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de artículos */}
        <div className="articles-grid">
          {currentArticles.map((article) => (
            <article
              key={article.id}
              className="article-card"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Imagen del artículo */}
              <div className="article-image">
                <Image
                  src={getCategoryImage(article.category)}
                  alt={`${article.category} - ${article.title}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="image-overlay"></div>
                <div className="category-badge">
                  <FaTag className="icon" />
                  <span itemProp="articleSection">{article.category}</span>
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="article-content">
                <div className="article-meta">
                  <span className="date" itemProp="datePublished">
                    <FaCalendarAlt className="icon" />
                    {new Date(article.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="source">Fuente: {article.source}</span>
                </div>

                <h3 className="article-title" itemProp="headline">
                  {article.title}
                </h3>

                <p className="article-excerpt" itemProp="description">
                  {article.excerpt}
                </p>

                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn"
                  aria-label={`Leer más sobre ${article.title}`}
                  itemProp="url"
                >
                  Leer artículo completo
                  <FaExternalLinkAlt className="icon" />
                </a>
              </div>

              {/* Schema.org metadata oculta */}
              <div style={{ display: "none" }}>
                <span
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <span itemProp="name">{article.source}</span>
                </span>
                <meta itemProp="dateModified" content={article.date} />
              </div>
            </article>
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              ← Anterior
            </button>

            <div className="pagination-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`page-number ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                  aria-label={`Ir a página ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="pagination-btn next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Página siguiente"
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-grid {
          background: #1a1a1a;
        }

        /* Filtros de categoría */
        .category-filters {
          text-align: center;
        }

        .filters-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .filter-btn {
          padding: 10px 24px;
          background: transparent;
          border: 2px solid rgba(252, 163, 17, 0.3);
          border-radius: 30px;
          color: #cfcfcf;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .filter-btn:hover {
          border-color: #fca311;
          color: #fca311;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: #fca311;
          border-color: #fca311;
          color: #000000;
        }

        /* Grid de artículos */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .article-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .article-card:hover {
          transform: translateY(-8px);
          border-color: rgba(252, 163, 17, 0.4);
          box-shadow: 0 20px 40px rgba(252, 163, 17, 0.15);
        }

        /* Imagen del artículo */
        .article-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .article-image img {
          transition: transform 0.4s ease;
        }

        .article-card:hover .article-image img {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 1;
          transition: background 0.3s ease;
        }

        .article-card:hover .image-overlay {
          background: linear-gradient(
            to bottom,
            rgba(252, 163, 17, 0.15) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        .category-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #fca311;
          z-index: 2;
        }

        .category-badge .icon {
          font-size: 10px;
        }

        /* Contenido del artículo */
        .article-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .article-meta .date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
        }

        .article-meta .date .icon {
          color: #fca311;
          font-size: 12px;
        }

        .article-meta .source {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          font-style: italic;
        }

        .article-title {
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .article-card:hover .article-title {
          color: #fca311;
        }

        .article-excerpt {
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: transparent;
          border: 2px solid #fca311;
          border-radius: 30px;
          color: #fca311;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          align-self: flex-start;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .read-more-btn:hover {
          background: #fca311;
          color: #000000;
          transform: translateX(5px);
        }

        .read-more-btn .icon {
          font-size: 12px;
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover .icon {
          transform: translateX(3px);
        }

        /* Paginación */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 40px;
        }

        .pagination-btn {
          padding: 12px 24px;
          background: transparent;
          border: 2px solid rgba(252, 163, 17, 0.3);
          border-radius: 30px;
          color: #cfcfcf;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-btn:hover:not(:disabled) {
          border-color: #fca311;
          color: #fca311;
        }

        .pagination-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .pagination-numbers {
          display: flex;
          gap: 8px;
        }

        .page-number {
          width: 44px;
          height: 44px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #cfcfcf;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .page-number:hover {
          border-color: #fca311;
          color: #fca311;
        }

        .page-number.active {
          background: #fca311;
          border-color: #fca311;
          color: #000000;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .article-image {
            height: 200px;
          }

          .article-content {
            padding: 20px;
          }

          .article-title {
            font-size: 20px;
          }

          .filters-wrapper {
            gap: 8px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 12px;
          }

          .pagination {
            flex-direction: column;
            gap: 12px;
          }

          .pagination-numbers {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .article-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .article-title {
            font-size: 18px;
          }

          .article-excerpt {
            font-size: 14px;
          }

          .read-more-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

export default BlogGrid;
