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
import { SITE_URL } from "@/config/site";
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
        title="Elephant Group | Implementos Publicitarios y Señalética en Valparaíso"
        description="Especialistas en señalética, material POP, gigantografías y merchandising en Valparaíso y Viña del Mar. Soluciones publicitarias para empresas. Cotiza con Elephant Group."
        canonical={`${SITE_URL}/`}
        ogImage={`${SITE_URL}/assets/light/imgs/og-image.webp`}
      />
      <Head>
        {/* LocalBusiness Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Elephant Group",
              url: `${SITE_URL}/`,
              image: `${SITE_URL}/assets/light/imgs/og-image.webp`,
              logo: `${SITE_URL}/assets/light/imgs/logo-eg-new.webp`,
              description:
                "Especialistas en señalética, material POP, gigantografías y merchandising en Valparaíso y Viña del Mar.",
              telephone: "+56993239203",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Valparaíso",
                addressRegion: "Valparaíso",
                addressCountry: "CL",
              },
              areaServed: ["Valparaíso", "Viña del Mar", "V Región"],
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
