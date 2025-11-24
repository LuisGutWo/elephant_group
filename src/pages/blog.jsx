import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import BlogHeader from "@/components/Blog/BlogHeader";
import BlogGrid from "@/components/Blog/BlogGrid";
import FooterBottom from "@/components/Main/FooterBottom";

function BlogPage() {
  useEffect(() => {
    const body = document?.body;
    if (body) {
      body.classList.add("main-bg");
    }
    return () => {
      const body = document?.body;
      if (body) {
        body.classList.remove("main-bg");
      }
    };
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Blog de Publicidad y Diseño | Elephant Group - Tendencias e Insights
        </title>
        <meta
          name="title"
          content="Blog de Publicidad y Diseño | Elephant Group - Tendencias e Insights"
        />
        <meta
          name="description"
          content="Mantente al día con las últimas tendencias en diseño gráfico, impresión, señalética, branding y marketing publicitario. Artículos especializados para profesionales del rubro."
        />
        <meta
          name="keywords"
          content="blog publicidad, blog diseño gráfico, tendencias impresión, marketing publicitario, señalética, branding, packaging, merchandising, impresión digital, impresión offset, Valparaíso"
        />
        <meta name="author" content="Elephant Group" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="geo.region" content="CL-VS" />
        <meta name="geo.placename" content="Valparaíso" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://landingclientes.elephantgroup.cl/blog"
        />
        <meta
          property="og:title"
          content="Blog de Publicidad y Diseño | Elephant Group"
        />
        <meta
          property="og:description"
          content="Tendencias, tecnologías y estrategias en diseño gráfico, impresión y marketing publicitario."
        />
        <meta
          property="og:image"
          content="https://landingclientes.elephantgroup.cl/light/assets/imgs/logo-light.webp"
        />
        <meta property="og:site_name" content="Elephant Group" />
        <meta property="og:locale" content="es_CL" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://landingclientes.elephantgroup.cl/blog"
        />
        <meta
          name="twitter:title"
          content="Blog de Publicidad y Diseño | Elephant Group"
        />
        <meta
          name="twitter:description"
          content="Artículos especializados sobre tendencias en diseño, impresión y marketing publicitario."
        />
        <meta
          name="twitter:image"
          content="https://landingclientes.elephantgroup.cl/light/assets/imgs/logo-light.webp"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://landingclientes.elephantgroup.cl/blog"
        />

        {/* Additional SEO */}
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <BlogHeader />
        <BlogGrid />
      </main>
      <FooterBottom />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Elephant Group",
            description:
              "Artículos y recursos sobre diseño gráfico, impresión, señalética y marketing publicitario",
            url: "https://landingclientes.elephantgroup.cl/blog",
            publisher: {
              "@type": "Organization",
              name: "Elephant Group",
              logo: {
                "@type": "ImageObject",
                url: "https://landingclientes.elephantgroup.cl/light/assets/imgs/logo-light.webp",
              },
            },
            inLanguage: "es-CL",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://landingclientes.elephantgroup.cl/blog",
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
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
                item: "https://landingclientes.elephantgroup.cl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://landingclientes.elephantgroup.cl/blog",
              },
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Elephant Group",
            url: "https://landingclientes.elephantgroup.cl",
            logo: "https://landingclientes.elephantgroup.cl/light/assets/imgs/logo-light.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+56-32-297-5510",
              contactType: "customer service",
              areaServed: "CL",
              availableLanguage: ["Spanish"],
            },
            sameAs: [
              "https://www.facebook.com/elephantgroup.cl",
              "https://www.instagram.com/elephantgroup.cl",
            ],
          }),
        }}
      />
    </>
  );
}

BlogPage.getLayout = (page) => <Layout>{page}</Layout>;

export default BlogPage;
