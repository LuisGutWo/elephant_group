import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Letreros from "@/components/InnerPages/Services/Letreros";
import FooterBottom from "@/components/Main/FooterBottom";

function LetrerosPage() {
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
    title: "Letreros Profesionales Personalizados",
    text: "LETREROS",
    background: "/assets/light/imgs/header/mercadito_main_banner.png",
  };

  return (
    <>
      <Head>
        <title>Elephant Group - Letreros Profesionales | Valparaíso</title>
        <meta
          name="description"
          content="Servicio de letreros profesionales en Valparaíso para empresas y comercios. Diseñamos, fabricamos e instalamos letreros corporativos, rótulos, letreros CNC e impresos."
        />
        <meta
          name="keywords"
          content="letreros, letreros Valparaíso, letreros publicitarios, rótulos corporativos, letreros CNC, letreros impresos, Elephant Group"
        />
        <meta name="author" content="Elephant Group" />
        <link
          rel="canonical"
          href="https://landingclientes.elephantgroup.cl/services/letreros"
        />
      </Head>{" "}
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Letreros />
      </main>
      <FooterBottom />
    </>
  );
}

LetrerosPage.getLayout = (page) => <Layout>{page}</Layout>;

export default LetrerosPage;
