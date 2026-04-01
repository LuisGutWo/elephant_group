/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import TopNavbar from "./TopNavbar";

function MainNavbar({ mainBg, subBg, noStatic, curve }) {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;

      if (window.scrollY > 200) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    const navbarCollapse = document.querySelector(".navbar .navbar-collapse");
    if (navbarCollapse) {
      navbarCollapse.classList.toggle("show");
    }
  };

  const handleDropdownMouseEnter = (event) => {
    const dropdown = event.currentTarget.querySelector(".dropdown-menu");
    if (dropdown) {
      dropdown.classList.add("show");
    }
  };

  const handleDropdownMouseLeave = (event) => {
    const dropdown = event.currentTarget.querySelector(".dropdown-menu");
    if (dropdown) {
      dropdown.classList.remove("show");
    }
  };

  return (
    <>
      <TopNavbar />
      <nav
        className={`navbar navbar-expand-lg ${curve ? "nav-crev" : ""} ${
          noStatic ? "" : "static"
        } ${mainBg ? "main-bg" : ""} ${subBg ? "sub-bg" : ""}`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="container">
          <Link
            className="logo"
            href="/home"
            aria-label="Elephant Group - Ir a inicio"
          >
            <img
              src="/assets/light/imgs/logo-eg-new.webp"
              alt="Elephant Group - Imprenta y servicios gráficos en Valparaíso"
              width="140"
              height="auto"
              className="icon-img-140"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Abrir menú de navegación"
            onClick={toggleNavbar}
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end pe-4 pt-30"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav" role="menubar">
              <li className="nav-item" role="none">
                <Link
                  className={`nav-link main-navbar-link-override${
                    router.pathname === "/home" ? " is-active" : ""
                  }`}
                  href="/home"
                  role="menuitem"
                  aria-label="Ir a página de inicio"
                  {...(router.pathname === "/home" && {
                    "aria-current": "page",
                  })}
                >
                  <span className="rolling-text">INICIO</span>
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                role="none"
              >
                <Link
                  className="nav-link dropdown-toggle main-navbar-link-override"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">PRODUCTOS</span>
                </Link>
                <ul className="dropdown-menu" role="menu">
                  <li role="none">
                    <Link
                      className={`dropdown-item${
                        router.pathname === "/services/letreros"
                          ? " is-active"
                          : ""
                      }`}
                      href="/services/letreros"
                      role="menuitem"
                      {...(router.pathname === "/services/letreros" && {
                        "aria-current": "page",
                      })}
                    >
                      Letreros
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      className={`dropdown-item${
                        router.pathname === "/services/senaleticas"
                          ? " is-active"
                          : ""
                      }`}
                      href="/services/senaleticas"
                      role="menuitem"
                      {...(router.pathname === "/services/senaleticas" && {
                        "aria-current": "page",
                      })}
                    >
                      Señaleticas
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      className={`dropdown-item${
                        router.pathname === "/services/adhesivos"
                          ? " is-active"
                          : ""
                      }`}
                      href="/services/adhesivos"
                      role="menuitem"
                      {...(router.pathname === "/services/adhesivos" && {
                        "aria-current": "page",
                      })}
                    >
                      Adhesivos
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item" role="none">
                <Link
                  className={`nav-link main-navbar-link-override${
                    router.pathname === "/quote" ? " is-active" : ""
                  }`}
                  href="/quote"
                  role="menuitem"
                  aria-label="Solicitar cotización de servicios"
                  {...(router.pathname === "/quote" && {
                    "aria-current": "page",
                  })}
                >
                  <span className="rolling-text">COTIZACIÓN</span>
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link
                  className={`nav-link main-navbar-link-override${
                    router.pathname === "/contact" ? " is-active" : ""
                  }`}
                  href="/contact"
                  role="menuitem"
                  aria-label="Contactar con Elephant Group"
                  {...(router.pathname === "/contact" && {
                    "aria-current": "page",
                  })}
                >
                  <span className="rolling-text">CONTACTO</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavbar;
