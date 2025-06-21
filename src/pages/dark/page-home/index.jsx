import React, { useEffect } from "react";

import Head from "next/head";

import Layout from "@/layouts/default";

import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Main/Header";
import Marq from "@/components/Main/Marq";
import Intro from "@/components/Main/Intro";
import Clients from "@/components/Main/Clients";
import Services from "@/components/Main/Services";
import Portfolio from "@/components/Main/Portfolio";
import Contact from "@/components/Main/Contact";
import Footer from "@/components/Main/Footer";

function HomeDark() {
  useEffect(() => {
    if (typeof document !== "undefined" && document.body !== null) {
      document.body.classList.add("sub-bg");

      return () => {
        if (typeof document !== "undefined" && document.body !== null) {
          document.body.classList.remove("sub-bg");
        }
      };
    }
  }, []);

  try {
    return (
      <>
        <Head>
          <title>Elephant Group</title>
          <meta name="description" content="Elephant Group web site" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Loader />
        <Navbar mainBg />
        <main className="main-bg position-re">
          <Header />
          <Marq />
          <Intro />
          <Services />
          <Portfolio />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Rendering error in HomePageDark:", error);
      return <div>Error: {error.message}</div>;
    } else {
      throw new Error(
        `Uncaught error in HomePageDark component: ${error.toString()}`
      );
    }
  }
}

HomeDark.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeDark;
