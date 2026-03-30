import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import FooterBottom from "@/components/Main/FooterBottom";
import Adhesivos from "@/components/InnerPages/Services/Adhesivos";

function AdhesivosPage() {
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
    title: "Adhesivos Personalizados para Empresas",
    text: "ADHESIVOS",
    background: "/assets/light/imgs/products/stickers.webp",
  };

  return (
    <>
      <Head>
        <title>Elephant Group - Adhesivos y Vinilos | Valparaíso</title>
        <meta
          name="description"
          content="Servicio de adhesivos personalizados en Valparaíso para vitrinas, muros, vidrios y vehículos. Diseñamos, imprimimos e instalamos vinilos, empavonados y rotulación con alta calidad y durabilidad."
        />
        <meta
          name="keywords"
          content="adhesivos, vinilos adhesivos, empavonados, rotulación vehicular, adhesivos para vitrinas, adhesivos Valparaíso, Elephant Group"
        />
        <meta name="author" content="Elephant Group" />
        <link
          rel="canonical"
          href="https://landingclientes.elephantgroup.cl/services/adhesivos"
        />
      </Head>{" "}
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Adhesivos />
      </main>
      <FooterBottom />
    </>
  );
}

AdhesivosPage.getLayout = (page) => <Layout>{page}</Layout>;

export default AdhesivosPage;
