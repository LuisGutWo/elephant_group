import React, { useEffect } from "react";
import SeoHead from "@/components/Common/SeoHead";
import Layout from "@/layouts/default";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Portfolio/HeaderPortfolio";
import GridPortfolioImages from "@/components/Portfolio/GridPortfolioImages";
import FooterBottom from "@/components/Main/FooterBottom";

function PortfolioPage() {
  useEffect(() => {
    if (document && document.body) {
      document.body.classList.add("main-bg");
    }
    return () => {
      if (document && document.body) {
        document.body.classList.remove("main-bg");
      }
    };
  }, []);

  const headerMetadata = {
    subTitle: "Portafolio de Trabajos",
    title: "Más de 500 Proyectos Exitosos en Valparaíso y Viña del Mar",
    text: "Galería de Trabajos",
    description:
      "Desde 2018, hemos realizado más de 500 proyectos publicitarios en Valparaíso y Viña del Mar. Especialistas en letreros CNC, señalética industrial, impresión digital de gran formato, diseño gráfico y fabricación de implementos publicitarios para empresas de la Región de Valparaíso.",
  };

  return (
    <>
      <SeoHead
        title="Portafolio | Elephant Group - Trabajos de Publicidad en Viña del Mar, Valparaiso y V Region"
        description="Portafolio de proyectos publicitarios realizados por Elephant Group en Valparaíso y Viña del Mar: señalética, impresión digital, diseño gráfico y material POP."
        keywords="portafolio publicitario Viña del Mar, Valparaiso y V Region, trabajos publicidad Viña del Mar, letreros CNC, señalética industrial, impresión digital, diseño gráfico, cortes CNC Viña del Mar, Valparaiso y V Region, implementos publicitarios, proyectos branding, galería trabajos Elephant Group"
        author="Elephant Group"
        robots="index, follow"
        geoRegion="CL-VS"
        geoPlacename="Viña del Mar, Valparaiso y V Region"
        geoPosition="-33.0472;-71.6127"
        icbm="-33.0472, -71.6127"
        ogType="website"
        ogTitle="Portafolio de Trabajos Publicitarios - Elephant Group Viña del Mar, Valparaiso y V Region"
        ogDescription="Descubre más de 500 proyectos publicitarios realizados en Viña del Mar, Valparaiso y V Region. Letreros CNC, señalética, impresión digital y diseño gráfico."
        ogImage="/light/assets/imgs/works/work_publicity.webp"
        ogUrl="https://elephantgroup.cl/portfolio"
        ogSiteName="Elephant Group"
        ogLocale="es_CL"
        twitterCard="summary_large_image"
        twitterTitle="Portafolio Publicitario - Elephant Group"
        twitterDescription="Galería de trabajos: Letreros CNC, señalética, impresión digital en Viña del Mar, Valparaiso y V Region"
        twitterImage="/light/assets/imgs/works/work_publicity.webp"
        canonical="https://elephantgroup.cl/portfolio"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://landingclientes.elephantgroup.cl/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portafolio",
                item: "https://landingclientes.elephantgroup.cl/portfolio",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Elephant Group",
            description:
              "Fabricación de implementos publicitarios en Viña del Mar, Valparaiso y V Region",
            url: "https://elephantgroup.cl",
            logo: "https://elephantgroup.cl/light/assets/imgs/logo-dark.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Viña del Mar, Valparaiso y V Region",
              addressRegion: "V Region",
              addressCountry: "CL",
            },
            areaServed: [
              { "@type": "City", name: "Viña del Mar, Valparaiso y V Region" },
            ],
            telephone: "+56951631370",
            email: "contacto@elephantgroup.cl",
            foundingDate: "2018",
            slogan: "Implementos publicitarios que destacan tu marca",
          },
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Portafolio de Trabajos Publicitarios - Elephant Group",
            description:
              "Galería de más de 500 proyectos de letreros CNC, señalética, impresión digital y diseño gráfico realizados en Viña del Mar, Valparaiso y V Region",
            url: "https://elephantgroup.cl/portfolio",
            provider: {
              "@type": "Organization",
              name: "Elephant Group",
              areaServed: ["Viña del Mar, Valparaiso y V Region"],
            },
            numberOfItems: "500+",
            keywords:
              "letreros CNC, señalética industrial, impresión digital, diseño gráfico, Viña del Mar, Valparaiso y V Region",
          },
        ]}
      />{" "}
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={headerMetadata} />
        <GridPortfolioImages />
      </main>
      <FooterBottom subBg />
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Elephant Group",
            description:
              "Fabricación de implementos publicitarios en Viña del Mar, Valparaiso y V Region",
            url: "https://elephantgroup.cl",
            logo: "https://elephantgroup.cl/light/assets/imgs/logo-dark.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Viña del Mar, Valparaiso y V Region",
              addressRegion: "V Region",
              addressCountry: "CL",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Viña del Mar, Valparaiso y V Region",
              },
            ],
            telephone: "+56951631370",
            email: "contacto@elephantgroup.cl",
            foundingDate: "2018",
            slogan: "Implementos publicitarios que destacan tu marca",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://elephantgroup.cl/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portafolio",
                item: "https://elephantgroup.cl/portfolio",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Portafolio de Trabajos Publicitarios - Elephant Group",
            description:
              "Galería de más de 500 proyectos de letreros CNC, señalética, impresión digital y diseño gráfico realizados en Viña del Mar, Valparaiso y V Region",
            url: "https://elephantgroup.cl/portfolio",
            provider: {
              "@type": "Organization",
              name: "Elephant Group",
              areaServed: ["Viña del Mar, Valparaiso y V Region"],
            },
            numberOfItems: "500+",
            keywords:
              "letreros CNC, señalética industrial, impresión digital, diseño gráfico, Viña del Mar, Valparaiso y V Region",
          }),
        }}
      />
    </>
  );
}

PortfolioPage.getLayout = (page) => <Layout>{page}</Layout>;

export default PortfolioPage;
