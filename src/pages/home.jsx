import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Main/Header";
import Products from "@/components/Main/Products";
import Clients from "@/components/Main/Clients";
import Services from "@/components/Main/Services";
import AboutUs from "@/components/Main/AboutUs";
import Portfolio from "@/components/Main/Portfolio";
import FooterImg from "@/components/Main/FooterImg";
import Footer from "@/components/Main/Footer";
import Form from "@/components/InnerPages/Contact/Form";
import FooterBottom from "@/components/Main/FooterBottom";

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
              logo: "https://landingclientes.elephantgroup.cl/light/assets/imgs/logo-light.webp",
              description:
                "Especialistas en señalética, material POP, gigantografías y merchandising en Valparaíso. Soluciones publicitarias para empresas.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Viña del Mar, Valparaíso, Chile",
                addressCountry: "CL",
              },
              telephone: "+56 9 5163 1370",
              email: "contacto@elephantgroup.cl",
              sameAs: [
                "https://www.facebook.com/elephantgroupchile",
                "https://www.instagram.com/elephantgroupchile/",
                "https://www.linkedin.com/company/elephantgroupchile/",
              ],
            }),
          }}
        />
        {/* WebSite Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Elephant Group",
              url: "https://landingclientes.elephantgroup.cl/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://landingclientes.elephantgroup.cl/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg position-re" id="main-content" role="main">
        <Header />
        <section id="portfolio" aria-labelledby="portfolio-title">
          <Portfolio />
        </section>
        <section id="products" aria-labelledby="products-title">
          <Products />
        </section>
        <section id="clients" aria-labelledby="clients-title">
          <Clients />
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <Form />
        </section>
        <section id="about" aria-labelledby="about-title">
          <AboutUs />
        </section>
      </main>
      <FooterImg />
      <Footer />
      <FooterBottom />
    </>
  );
}

HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomePage;
