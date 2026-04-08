import React from "react";
import Image from "next/image";

const FooterImg = () => {
  return (
    <div className="eg-footer-image-inner" id="footer-image">
      <Image
        src="/assets/light/imgs/header/Banner_Contacto.webp"
        alt="Letrero publicitario de Elephant Group en Valparaíso - Imagen decorativa del pie de página"
        className="eg-footer-main-image"
        width={600}
        height={120}
        priority
      />
    </div>
  );
};

export default FooterImg;
