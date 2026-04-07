import { Divider } from "@heroui/react";
import React from "react";

function BlogHeader() {
  return (
    <header className="blog-header section-padding pb-0">
      {/* Background pattern */}
      <div
        className="background-pattern"
        style={{
          backgroundImage: "url(/assets/dark/imgs/background/work-127.webp)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.05,
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <section
        className="container"
        itemScope
        itemType="https://schema.org/Blog"
      >
        <div className="row">
          <div className="col-lg-8">
            <div
              className="caption"
              style={{ position: "relative", zIndex: 1 }}
            >
              <p className="sub-title mb-15">NUESTRO BLOG</p>
              <h1 className="fz-55 fw-700" itemProp="headline">
                Insights de la Industria Publicitaria
              </h1>
              <p className="mt-30 fz-18" itemProp="description">
                Mantente actualizado con las últimas tendencias, tecnologías y
                estrategias en diseño gráfico, impresión, señalética y marketing
                publicitario.
              </p>
            </div>
            <Divider />
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-header {
          position: relative;
          min-height: 50vh;
          overflow: hidden;
          padding-bottom: 60px;
        }

        .sub-title {
          color: #c9961a;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          padding-left: 20px;
        }

        .sub-title::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c9961a;
        }

        .caption h1 {
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 0;
        }

        .caption p {
          color: rgba(26, 26, 26, 0.8);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .blog-header {
            min-height: 40vh;
          }

          .caption h1 {
            font-size: 2.5rem !important;
          }

          .caption p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .caption h1 {
            font-size: 2rem !important;
          }

          .sub-title {
            font-size: 12px;
          }
        }
      `}</style>
    </header>
  );
}

export default BlogHeader;
