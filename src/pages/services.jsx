import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Services from "@/components/InnerPages/About/Services";
import ServicesTab from "@/components/Main/ServicesTab";
import Footer from "@/components/Main/Footer";
import FooterBottom from "@/components/Main/FooterBottom";
import Form from "@/components/InnerPages/Contact/Form";

function ServicesPage() {
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

  const headerMetadata = {
    subTitle: "SERVICIOS",
    title: "Impulsamos tu marca con soluciones creativas y personalizadas.",
    text: "SERVICIOS",
  };

  return (
    <>
      <Head>
        {/* Service Schema.org */}
        <title>
          Servicios Publicitarios | Elephant Group - Diseño, Impresión y
          Señalética en Valparaíso
        </title>
        <meta
          name="description"
          content="Servicios de diseño gráfico, impresión digital, señalética y material POP en Valparaíso y Viña del Mar. Soluciones creativas y personalizadas para empresas."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType:
                "Servicios Publicitarios, Diseño Gráfico e Impresión",
              provider: {
                "@type": "Organization",
                name: "Elephant Group",
                url: "https://landingclientes.elephantgroup.cl/",
                logo: "https://landingclientes.elephantgroup.cl/light/assets/imgs/logo-light.webp",
              },
              areaServed: "Valparaíso, Viña del Mar, Chile",
              description:
                "Diseño gráfico, impresión digital, señalética, material POP y soluciones publicitarias para empresas en Valparaíso y Viña del Mar.",
              availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Viña del Mar",
                    addressRegion: "Valparaíso",
                    addressCountry: "CL",
                  },
                },
              },
            }),
          }}
        />
        <title>
          Elephant Group - Servicios Publicitarios, Diseño Gráfico e Impresión
          en Valparaíso
        </title>
        <meta
          name="description"
          content="Descubre todos los servicios de Elephant Group: diseño gráfico, impresión digital, señalética, material POP y soluciones publicitarias en Valparaíso y Viña del Mar. Atención personalizada para empresas."
        />
        <meta
          name="keywords"
          content="servicios publicitarios, diseño gráfico, impresión digital, señalética, material POP, Elephant Group, Valparaíso, Viña del Mar, soluciones publicitarias, empresas"
        />
        <meta name="author" content="Elephant Group" />
        <link
          rel="canonical"
          href="https://landingclientes.elephantgroup.cl/servicios"
        />
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Form />
      </main>
      <FooterBottom />
    </>
  );
}

ServicesPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ServicesPage;
