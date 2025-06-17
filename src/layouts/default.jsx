import React, { useEffect } from "react";
//= Packages
import WhatsAppButton from "@/common/WhatsAppButton";
//= Scripts
import correctStylesheetsOrder from "@/common/correctStylesheetsOrder";
//= Components
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";

const DefaultLayout = ({ children, lightMode = false }) => {
  if (typeof lightMode !== "boolean") {
    throw new Error(
      "The lightMode prop of the DefaultLayout component must be a boolean."
    );
  }

  useEffect(() => {
    if (typeof correctStylesheetsOrder !== "function") {
      console.error("correctStylesheetsOrder is not a function");
      return;
    }

    correctStylesheetsOrder({ lightMode });
  }, [lightMode]);

  useEffect(() => {
    const head = document.head;
    if (!head) {
      console.error("document.head is null or undefined");
      return;
    }

    let existingLightStyles = document.querySelectorAll(
      'link[href^="/light/assets/css"]'
    );
    let existingDarkStyles = document.querySelectorAll(
      'link[href^="/dark/assets/css"]'
    );

    // Remove existing stylesheets
    existingLightStyles = Array.from(existingLightStyles);
    existingDarkStyles = Array.from(existingDarkStyles);

    [...existingLightStyles, ...existingDarkStyles].forEach((link) => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    });

    // Add new stylesheets based on lightMode
    const stylesheets = lightMode
      ? ["/light/assets/css/plugins.css", "/light/assets/css/style.css"]
      : ["/dark/assets/css/plugins.css", "/dark/assets/css/style.css"];

    stylesheets.forEach((href) => {
      const link = document.createElement("link");
      if (!link) {
        console.error("Error creating the link element");
        return;
      }

      link.rel = "stylesheet";
      link.href = href;
      head.appendChild(link);
    });

    return () => {
      // Cleanup stylesheets on component unmount
      stylesheets.forEach((href) => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link && link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, [lightMode]);

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simula el fin del loading, reemplaza esto con tu lógica real
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {typeof Cursor === "function" ? (
        <Cursor />
      ) : (
        console.error("Cursor component is not available")
      )}
      {!isLoading && typeof WhatsAppButton === "function" ? (
        <WhatsAppButton />
      ) : null}
      {typeof ProgressScroll === "function" ? (
        <ProgressScroll />
      ) : (
        console.error("ProgressScroll component is not available")
      )}
      {children}
    </>
  );
};

export default DefaultLayout;
