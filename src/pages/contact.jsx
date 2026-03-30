import React, { useEffect } from "react";
import SeoHead from "@/components/Common/SeoHead";
import Layout from "@/layouts/default";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Contact/Header";
import FooterBottom from "@/components/Main/FooterBottom";
import FooterImg from "@/components/Main/FooterImg";
import Footer from "@/components/Main/Footer";

function ContactPage() {
  useEffect(() => {
    const body = document?.body;
    if (body !== null && body !== undefined) {
      body.classList.add("main-bg");
    }
    return () => {
      const body = document?.body;
      if (body !== null && body !== undefined) {
        body.classList.remove("main-bg");
      }
    };
  }, []);

  return (
    <>
      <SeoHead
        title="Contacto | Elephant Group"
        description="Contáctanos para soluciones de diseño gráfico, impresión digital y señalética en Valparaíso y Viña del Mar. Atención personalizada para empresas."
        keywords="contacto, agencia creativa, diseño gráfico, impresión digital, señalética, Valparaíso, Viña del Mar, Elephant Group"
        author="Elephant Group"
        canonical="https://landingclientes.elephantgroup.cl/contacto"
      />{" "}
      <Navbar mainBg />
      <main>
        <Header />
        <FooterImg />
        <Footer />
      </main>
      <FooterBottom />
    </>
  );
}

ContactPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ContactPage;
