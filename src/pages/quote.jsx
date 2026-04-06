import React, { useEffect } from "react";
import SeoHead from "@/components/Common/SeoHead";
import Layout from "@/layouts/default";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Story from "@/components/InnerPages/About/Story";
import FooterBottom from "@/components/Main/FooterBottom";
import FooterImg from "@/components/Main/FooterImg";
import Footer from "@/components/Main/Footer";
import HeaderContact from "@/components/InnerPages/Contact/Header";

function QuotePage() {
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
    subTitle: "SOLICITA TU COTIZACIÓN",
    title:
      "Cuéntanos tu proyecto y recibe una propuesta personalizada de implementos publicitarios en menos de 24 horas.",
    text: "Cotización",
  };

  return (
    <>
      <SeoHead
        title="Cotización | Elephant Group - Presupuesto de Implementos Publicitarios"
        description="Solicita tu cotización personalizada de implementos publicitarios en Valparaíso. Material POP, señalética, gigantografías y merchandising. Respuesta en 24 horas. Presupuesto sin compromiso."
        keywords="cotización publicidad, presupuesto implementos publicitarios, cotizar material POP, precio señalética, presupuesto merchandising, cotización gigantografías Viña del Mar, Valparaiso y V Region, solicitar presupuesto publicidad V Región"
        author="Elephant Group"
        ogTitle="Cotización | Elephant Group - Presupuesto Implementos Publicitarios"
        ogDescription="Solicita tu cotización personalizada. Respuesta en 24 horas. Material POP, señalética y merchandising en Viña del Mar, Valparaiso y V Region."
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="Cotización | Elephant Group"
        twitterDescription="Solicita tu presupuesto personalizado de implementos publicitarios. Respuesta en 24 horas."
      />
      <Navbar mainBg />
      <main>
        <Header
          data={headerMetadata}
          background="/assets/light/imgs/background/viña-del-mar.webp"
        />
        <Story />
        <HeaderContact />
        <FooterImg />
        <Footer />
      </main>
      <FooterBottom />
    </>
  );
}

QuotePage.getLayout = (page) => <Layout>{page}</Layout>;

export default QuotePage;
