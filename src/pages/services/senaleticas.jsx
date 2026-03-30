import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import FooterBottom from "@/components/Main/FooterBottom";
import Señaleticas from "@/components/InnerPages/Services/Señaleticas";

function SenaleticasPage() {
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
    title: "Señaléticas Profesionales para Empresas",
    text: "SEÑALÉTICAS",
    background: "/assets/light/imgs/works/letreros_muestra_varios.webp",
  };

  return (
    <>
      <Head>
        <title>Elephant Group - Señaléticas Profesionales | Valparaíso</title>
        <meta
          name="description"
          content="Servicio de señaléticas profesionales en Valparaíso para empresas, oficinas y comercios. Diseñamos, fabricamos e instalamos señalética corporativa, de orientación y seguridad."
        />
        <meta
          name="keywords"
          content="señaléticas, señalética Valparaíso, señalética corporativa, señalética de seguridad, señalética interior y exterior, Elephant Group"
        />
        <meta name="author" content="Elephant Group" />
        <link
          rel="canonical"
          href="https://landingclientes.elephantgroup.cl/services/senaleticas"
        />
      </Head>{" "}
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Señaleticas />
      </main>
      <FooterBottom />
    </>
  );
}

SenaleticasPage.getLayout = (page) => <Layout>{page}</Layout>;

export default SenaleticasPage;
