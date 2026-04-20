import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import gsap from "gsap";

function Loader() {
  const router = useRouter();
  const [logoSrc, setLogoSrc] = useState("/assets/dark/imgs/logo2-dark.webp");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detectar tema basado en la ruta
    const currentPath = router.asPath;
    const isDark = currentPath.includes("/dark/");

    // Establecer el logo apropiado
    setLogoSrc(
      isDark
        ? "/assets/dark/imgs/logo2-dark.webp"
        : "/assets/dark/imgs/logo2-light.webp",
    );

    return () => {
      // Cleanup function
    };
  }, [router.asPath]);

  useEffect(() => {
    let tl = null;

    try {
      // Configuración inicial optimizada
      if (document.querySelector(".loader-wrap")) {
        gsap.set(".loader-wrap", { zIndex: 99999, opacity: 1 });
      }
      if (document.querySelector(".loader-logo")) {
        gsap.set(".loader-logo", { scale: 0.3, opacity: 0, rotation: -10 });
      }
      if (document.querySelector(".loader-progress")) {
        gsap.set(".loader-progress", { width: 0 });
      }
      if (document.querySelector(".loader-text")) {
        gsap.set(".loader-text", { opacity: 0, y: 20 });
      }

      // Solo crear la animación si existen los elementos principales
      if (
        document.querySelector(".loader-logo") &&
        document.querySelector(".loader-wrap")
      ) {
        tl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
          },
        });

        // Animación mejorada del logo
        tl.to(".loader-logo", {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          delay: 0.2,
        });
        if (document.querySelector(".loader-text")) {
          tl.to(
            ".loader-text",
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.3",
          );
        }
        if (document.querySelector(".loader-progress")) {
          tl.to(
            ".loader-progress",
            {
              width: "100%",
              duration: 1.0,
              ease: "power2.out",
            },
            "-=0.1",
          );
        }
        tl.to(".loader-logo", {
          scale: 1.05,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
        if (document.querySelector(".loader-text")) {
          tl.to(
            ".loader-text",
            {
              opacity: 0,
              y: -10,
              duration: 0.2,
              ease: "power2.in",
            },
            "-=0.1",
          );
        }
        tl.to(".loader-wrap", {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          delay: 0.3,
        }).to(".loader-wrap", {
          display: "none",
          zIndex: -1,
        });
        if (document.querySelector("header")) {
          tl.from(
            "header",
            {
              y: -30,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4",
          );
        }
        if (document.querySelector("header .container")) {
          tl.from(
            "header .container",
            {
              y: 20,
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.5",
          );
        }
      }
    } catch (error) {
      console.error("Error in Loader component:", error);
      // Fallback mejorado
      setTimeout(() => {
        const loaderEl = document.querySelector(".loader-wrap");
        if (loaderEl) {
          gsap.to(loaderEl, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              loaderEl.style.display = "none";
            },
          });
        }
      }, 2000);
    }

    return () => {
      // Cleanup: kill the timeline if it exists
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  // Efecto para precargar la imagen
  useEffect(() => {
    const img = new window.Image();
    img.src = logoSrc;
    img.onload = () => {
      console.log("Logo precargado correctamente");
    };
    img.onerror = () => {
      console.warn("Error cargando logo, usando fallback");
      setLogoSrc("/assets/dark/imgs/logo2-dark.webp");
    };

    // Cleanup function para React
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [logoSrc]);

  return (
    <div className="loader-wrap">
      {/* Overlay de fondo */}
      <div className="loader-overlay"></div>

      {/* Contenido del loader */}
      <div className="loader-content">
        <div className="loader-logo">
          <NextImage
            src={logoSrc}
            alt="Logo animado de Elephant Group - Imprenta y servicios gráficos en Valparaíso"
            className="loader-logo-img"
            width={180}
            height={60}
            priority
            onError={(e) => {
              console.warn("Error loading image, using fallback");
              if (
                e.target &&
                e.target.src !== "/assets/dark/imgs/logo2-dark.webp"
              ) {
                e.target.src = "/assets/dark/imgs/logo2-dark.webp";
              }
            }}
          />
        </div>

        {/* Barra de progreso mejorada */}
        <div className="loader-progress-container">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
