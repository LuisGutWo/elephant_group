import React, { useEffect } from "react";
import SeoHead from "@/components/Common/SeoHead";
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
      <SeoHead
        title="Política de Privacidad | Elephant Group - Protección de Datos y Transparencia"
        description="Política de privacidad de Elephant Group. Conoce cómo protegemos y gestionamos tu información personal de manera responsable y transparente en Valparaíso y Viña del Mar."
        keywords="política de privacidad, protección de datos, privacidad, seguridad de datos, GDPR Chile, Ley 19.628, datos personales, confidencialidad, Elephant Group, Valparaíso"
        author="Elephant Group"
        robots="index, follow"
        language="Spanish"
        revisitAfter="7 days"
        canonical="https://landingclientes.elephantgroup.cl/politica-privacidad"
        ogType="website"
        ogUrl="https://landingclientes.elephantgroup.cl/politica-privacidad"
        ogTitle="Política de Privacidad - Elephant Group | Protección de Datos"
        ogDescription="Tu privacidad es nuestra prioridad. Conoce cómo Elephant Group protege y gestiona tu información personal de forma segura y transparente."
        ogImage="https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp"
        ogImageWidth="1200"
        ogImageHeight="630"
        ogLocale="es_CL"
        ogSiteName="Elephant Group"
        twitterCard="summary_large_image"
        twitterUrl="https://landingclientes.elephantgroup.cl/politica-privacidad"
        twitterTitle="Política de Privacidad - Elephant Group"
        twitterDescription="Protegemos tu información personal con los más altos estándares de seguridad y transparencia."
        twitterImage="https://landingclientes.elephantgroup.cl/dark/assets/imgs/logo-light.webp"
        geoRegion="CL-VS"
        geoPlacename="Valparaíso"
        geoPosition="-33.0472;-71.6127"
        icbm="-33.0472, -71.6127"
        themeColor="#c9961a"
        formatDetection="telephone=no"
        xUaCompatible="ie=edge"
        structuredData={structuredData}
      />{" "}
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
