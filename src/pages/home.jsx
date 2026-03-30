import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Main/Header";
import AboutUs from "@/components/Main/AboutUs";
import Portfolio from "@/components/Main/Portfolio";
import FooterImg from "@/components/Main/FooterImg";
import Footer from "@/components/Main/Footer";
import FooterBottom from "@/components/Main/FooterBottom";

import SeoHead from "@/components/Common/SeoHead";
import Clients from "@/components/Main/Clients";

function HomePage() {
  useEffect(() => {
    if (document && document.body) {
      document.body.classList.add("sub-bg");
    }
    return () => {
      if (document && document.body) {
        document.body.classList.remove("sub-bg");
      }
    };
  }, []);

  return (
    <>
      <SeoHead
        title="Inicio | Elephant Group - Agencia Creativa"
        description="Agencia creativa en Valparaíso y Viña del Mar. Diseño gráfico, impresión digital, señalética y soluciones publicitarias para empresas."
        keywords="agencia creativa, diseño gráfico, impresión digital, señalética, publicidad, Valparaíso, Viña del Mar, Elephant Group"
        author="Elephant Group"
        canonical="https://landingclientes.elephantgroup.cl/"
      />
      <Head>
        <title>
          Elephant Group | Implementos Publicitarios y Señalética en Valparaíso
        </title>
        <meta
          name="description"
          content="Especialistas en señalética, material POP, gigantografías y merchandising en Valparaíso. Soluciones publicitarias para empresas. Cotiza con Elephant Group."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Organization Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elephant Group",
              url: "https://landingclientes.elephantgroup.cl/",
              logo: "/logo.png",
              sameAs: [
                "https://www.facebook.com/elephantgroupchile",
                "https://www.instagram.com/elephantgroupchile/",
              ],
            }),
          }}
        />
      </Head>
      <Loader />
      <Navbar />
      <Header />
      <main>
        <section id="about" aria-labelledby="about-title">
          <AboutUs />
        </section>
      </main>
      <Portfolio />
      <Clients />
      <FooterImg />
      <Footer />
      <FooterBottom />
    </>
  );
}

HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomePage;
