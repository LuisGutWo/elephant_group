import React, { useEffect } from "react";
import gsap from "gsap";

function Loader() {
  useEffect(() => {
    const svg = document.getElementById("svg");
    if (!svg) return; // Check if svg exists

    gsap.set(".loader-wrap", { zIndex: 9999 });
    gsap.set(".loader-wrap-heading .load-text", { y: -100, opacity: 0 });

    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
      delay: 1.5,
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.easeOut",
    })
      .to(svg, { duration: 0.5, attr: { d: curve }, ease: "power2.easeIn" })
      .to(svg, { duration: 0.5, attr: { d: flat }, ease: "power2.easeOut" })
      .to(".loader-wrap", { y: -1500, duration: 0.5, ease: "power2.easeIn" })
      .to(".loader-wrap", { zIndex: -1, display: "none" })
      .from("header", { y: 200 }, "-=1.5")
      .from("header .container", { y: 40, opacity: 0, delay: 0.3 }, "-=1.5");
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <span>
          <h2 className="load-text">
            <span>E</span>
            <span>l</span>
            <span>e</span>
            <span>p</span>
            <span>h</span>
            <span>a</span>
            <span>n</span>
            <span>t</span>
            <br />
            <span>g</span>
            <span>r</span>
            <span>o</span>
            <span>u</span>
            <span>p</span>
          </h2>
        </span>
      </div>
    </div>
  );
}

export default Loader;
