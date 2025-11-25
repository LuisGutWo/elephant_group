import React, { useEffect } from "react";
import Head from "next/head";
import Loader from "@/components/Common/Loader";
import MainNavbar from "@/components/Common/MainNavbar";
import TermsHeader from "@/components/Legal/TermsHeader";
import TermsContent from "@/components/Legal/TermsContent";
import FooterBottom from "@/components/Main/FooterBottom";

function TermsAndConditions() {
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
        "@id": "https://landingclientes.elephantgroup.cl/terminos",
        url: "https://landingclientes.elephantgroup.cl/terminos",
        name: "Términos y Condiciones - Elephant Group",
        description:
          "Términos y condiciones que regulan el uso de los servicios de Elephant Group: implementos publicitarios, señalética, diseño gráfico y productos relacionados.",
        inLanguage: "es-CL",
        isPartOf: {
          "@id": "https://landingclientes.elephantgroup.cl/#website",
        },
        breadcrumb: {
          "@id": "https://landingclientes.elephantgroup.cl/terminos#breadcrumb",
        },
        datePublished: "2025-01-01T00:00:00+00:00",
        dateModified: "2025-11-24T00:00:00+00:00",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://landingclientes.elephantgroup.cl/terminos#breadcrumb",
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
            name: "Términos y Condiciones",
            item: "https://landingclientes.elephantgroup.cl/terminos",
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
        "@type": "TermsOfService",
        "@id": "https://landingclientes.elephantgroup.cl/terminos#tos",
        name: "Términos y Condiciones de Servicio",
        description:
          "Términos y condiciones que regulan la relación comercial entre Elephant Group y sus clientes para servicios de implementos publicitarios, señalética y diseño gráfico.",
        datePublished: "2025-01-01T00:00:00+00:00",
        dateModified: "2025-11-24T00:00:00+00:00",
        inLanguage: "es-CL",
        publisher: {
          "@id": "https://landingclientes.elephantgroup.cl/#organization",
        },
        termsOfService: "https://landingclientes.elephantgroup.cl/terminos",
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Términos y Condiciones - Elephant Group | Servicios Publicitarios
        </title>
        <meta
          name="title"
          content="Términos y Condiciones - Elephant Group | Servicios Publicitarios"
        />
        <meta
          name="description"
          content="Términos y condiciones de uso de servicios de Elephant Group. Conoce nuestras políticas de cotización, pagos, plazos de entrega, garantías y responsabilidades para implementos publicitarios y señalética."
        />
        <meta
          name="keywords"
          content="términos y condiciones, términos de servicio, condiciones generales, políticas comerciales, contrato de servicio, garantías, devoluciones, Elephant Group, Valparaíso, Chile"
        />
        <meta name="author" content="Elephant Group" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://landingclientes.elephantgroup.cl/terminos"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://landingclientes.elephantgroup.cl/terminos"
        />
        <meta
          property="og:title"
          content="Términos y Condiciones - Elephant Group"
        />
        <meta
          property="og:description"
          content="Condiciones generales que regulan el uso de nuestros servicios de implementos publicitarios, señalética y diseño gráfico. Información sobre cotizaciones, pagos, plazos y garantías."
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
          content="https://landingclientes.elephantgroup.cl/terminos"
        />
        <meta
          property="twitter:title"
          content="Términos y Condiciones - Elephant Group"
        />
        <meta
          property="twitter:description"
          content="Conoce nuestras condiciones generales de servicio: políticas de cotización, pagos, plazos, garantías y responsabilidades."
        />
        <meta
          property="twitter:image"
          content="https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp"
        />

        {/* Geo Tags */}
        <meta name="geo.region" content="CL-VS" />
        <meta
          name="geo.placename"
          content="Viña del Mar, Valparaiso y V Region"
        />
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
        <TermsHeader />
        <TermsContent />
      </main>
      <FooterBottom />
    </>
  );
}

export default TermsAndConditions;

export async function getStaticProps() {
  return {
    props: {
      title: "Términos y Condiciones",
    },
  };
}
