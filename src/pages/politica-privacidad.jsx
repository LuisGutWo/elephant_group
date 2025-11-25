import React, { useEffect } from "react";
import Head from "next/head";
import Loader from "@/components/Common/Loader";
import MainNavbar from "@/components/Common/MainNavbar";
import PrivacyPolicyHeader from "@/components/Legal/PrivacyPolicyHeader";
import PrivacyPolicyContent from "@/components/Legal/PrivacyPolicyContent";
import FooterBottom from "@/components/Main/FooterBottom";

function PrivacyPolicy() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => {
      document.body.classList.remove("main-bg");
    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://landingclientes.elephantgroup.cl/politica-privacidad",
        url: "https://landingclientes.elephantgroup.cl/politica-privacidad",
        name: "Política de Privacidad - Elephant Group",
        description:
          "Política de privacidad de Elephant Group. Conoce cómo protegemos y gestionamos tu información personal de manera responsable y transparente.",
        inLanguage: "es-CL",
        isPartOf: {
          "@id": "https://landingclientes.elephantgroup.cl/#website",
        },
        breadcrumb: {
          "@id":
            "https://landingclientes.elephantgroup.cl/politica-privacidad#breadcrumb",
        },
        datePublished: "2025-01-01T00:00:00+00:00",
        dateModified: "2025-11-24T00:00:00+00:00",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://landingclientes.elephantgroup.cl/politica-privacidad#breadcrumb",
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
            name: "Política de Privacidad",
            item: "https://landingclientes.elephantgroup.cl/politica-privacidad",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://landingclientes.elephantgroup.cl/#organization",
        name: "Elephant Group",
        alternateName: "LAGmedia",
        url: "https://landingclientes.elephantgroup.cl/",
        logo: {
          "@type": "ImageObject",
          url: "https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp",
          width: 250,
          height: 80,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+56-9-5163-1370",
          contactType: "customer service",
          email: "contacto@elephantgroup.cl",
          availableLanguage: ["Spanish"],
          areaServed: "CL",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valparaíso",
          addressRegion: "Región de Valparaíso",
          addressCountry: "CL",
        },
        sameAs: [
          "https://www.instagram.com/elephantgroupcl",
          "https://www.facebook.com/elephantgroupcl",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://landingclientes.elephantgroup.cl/#localbusiness",
        name: "Elephant Group",
        image:
          "https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Viña del Mar, Valparaiso y V Region",
          addressRegion: "V Region",
          postalCode: "2340000",
          addressCountry: "CL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.0472,
          longitude: -71.6127,
        },
        telephone: "+56-9-5163-1370",
        email: "contacto@elephantgroup.cl",
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
      },
      {
        "@type": "PrivacyPolicy",
        "@id":
          "https://landingclientes.elephantgroup.cl/politica-privacidad#policy",
        name: "Política de Privacidad",
        description:
          "Política de privacidad que describe cómo Elephant Group recopila, usa y protege la información personal de sus usuarios.",
        datePublished: "2025-01-01T00:00:00+00:00",
        dateModified: "2025-11-24T00:00:00+00:00",
        inLanguage: "es-CL",
        publisher: {
          "@id": "https://landingclientes.elephantgroup.cl/#organization",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Política de Privacidad | Elephant Group - Protección de Datos y
          Transparencia
        </title>
        <meta
          name="description"
          content="Política de privacidad de Elephant Group. Conoce cómo protegemos y gestionamos tu información personal de manera responsable y transparente en Valparaíso y Viña del Mar."
        />
        {/* Primary Meta Tags */}
        <title>
          Política de Privacidad - Elephant Group | Protección de Datos
        </title>
        <meta
          name="title"
          content="Política de Privacidad - Elephant Group | Protección de Datos"
        />
        <meta
          name="description"
          content="Política de privacidad de Elephant Group. Conoce cómo protegemos y gestionamos tu información personal de manera responsable y transparente según la Ley N° 19.628 de Chile."
        />
        <meta
          name="keywords"
          content="política de privacidad, protección de datos, privacidad, seguridad de datos, GDPR Chile, Ley 19.628, datos personales, confidencialidad, Elephant Group, Valparaíso"
        />
        <meta name="author" content="Elephant Group" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://landingclientes.elephantgroup.cl/politica-privacidad"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://landingclientes.elephantgroup.cl/politica-privacidad"
        />
        <meta
          property="og:title"
          content="Política de Privacidad - Elephant Group | Protección de Datos"
        />
        <meta
          property="og:description"
          content="Tu privacidad es nuestra prioridad. Conoce cómo Elephant Group protege y gestiona tu información personal de forma segura y transparente."
        />
        <meta
          property="og:image"
          content="https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_CL" />
        <meta property="og:site_name" content="Elephant Group" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://landingclientes.elephantgroup.cl/politica-privacidad"
        />
        <meta
          property="twitter:title"
          content="Política de Privacidad - Elephant Group"
        />
        <meta
          property="twitter:description"
          content="Protegemos tu información personal con los más altos estándares de seguridad y transparencia."
        />
        <meta
          property="twitter:image"
          content="https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp"
        />

        {/* Geo Tags */}
        <meta name="geo.region" content="CL-VS" />
        <meta name="geo.placename" content="Valparaíso" />
        <meta name="geo.position" content="-33.0472;-71.6127" />
        <meta name="ICBM" content="-33.0472, -71.6127" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#fca311" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Loader />
      <MainNavbar mainBg />
      <main id="main-content">
        <PrivacyPolicyHeader />
        <PrivacyPolicyContent />
      </main>
      <FooterBottom />
    </>
  );
}

export default PrivacyPolicy;

export async function getStaticProps() {
  return {
    props: {
      title: "Política de Privacidad",
    },
  };
}
