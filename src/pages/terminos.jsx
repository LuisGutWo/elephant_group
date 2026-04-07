import React, { useEffect } from "react";
import SeoHead from "@/components/Common/SeoHead";
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
      <SeoHead
        title="Términos y Condiciones | Elephant Group - Servicios Publicitarios en Valparaíso"
        description="Términos y condiciones de Elephant Group para servicios de señalética, impresión, diseño gráfico y material POP en Valparaíso y Viña del Mar."
        keywords="términos y condiciones, términos de servicio, condiciones generales, políticas comerciales, contrato de servicio, garantías, devoluciones, Elephant Group, Valparaíso, Chile"
        author="Elephant Group"
        robots="index, follow"
        language="Spanish"
        revisitAfter="7 days"
        canonical="https://landingclientes.elephantgroup.cl/terminos"
        ogType="website"
        ogUrl="https://landingclientes.elephantgroup.cl/terminos"
        ogTitle="Términos y Condiciones - Elephant Group"
        ogDescription="Condiciones generales que regulan el uso de nuestros servicios de implementos publicitarios, señalética y diseño gráfico. Información sobre cotizaciones, pagos, plazos y garantías."
        ogImage="https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp"
        ogImageWidth="1200"
        ogImageHeight="630"
        ogLocale="es_CL"
        ogSiteName="Elephant Group"
        twitterCard="summary_large_image"
        twitterUrl="https://landingclientes.elephantgroup.cl/terminos"
        twitterTitle="Términos y Condiciones - Elephant Group"
        twitterDescription="Conoce nuestras condiciones generales de servicio: políticas de cotización, pagos, plazos, garantías y responsabilidades."
        twitterImage="https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp"
        geoRegion="CL-VS"
        geoPlacename="Viña del Mar, Valparaiso y V Region"
        geoPosition="-33.0472;-71.6127"
        icbm="-33.0472, -71.6127"
        themeColor="#c9961a"
        formatDetection="telephone=no"
        xUaCompatible="ie=edge"
        structuredData={structuredData}
      />{" "}
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
