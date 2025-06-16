import { facebookSvg, instagramSvg, whatsAppSvg } from "@/data/icons";
import React from "react";
import { Button } from "react-bootstrap";

const TopNavbar = ({ lightMode, mainBg, curve }) => {
  const handleClick = () => {
    if (window == null || window.location == null) {
      console.error(
        "Error while opening WhatsApp link: Window or window.location is null"
      );
      return;
    }

    const url =
      "https://api.whatsapp.com/send?phone=+56920390272&text=Hola,%20somos%20Elephant%20Group...%20en%20que%20podemos%20ayudarte?";

    try {
      window.open(url, "_blank", "noopener noreferrer");
    } catch (error) {
      console.error("Error while opening WhatsApp link:", error);
    }
  };

  return (
    <nav className="top__navbar">
      <ul className="top__navbar-list container">
        <li className="top__navbar-item nav-item d-flex flex-row justify-content-evenly align-items-center">
          <a
            className="nav-link icon-img-200"
            href="https://www.instagram.com/elephantgroupchile/"
            rel="noopener noreferrer"
          >
            {instagramSvg}
          </a>
          <a
            className="nav-link icon-img-200"
            href="https://web.facebook.com/elephantgroupchile"
            rel="noopener noreferrer"
          >
            {facebookSvg}
          </a>
        </li>
        <li className="top__navbar-item nav-item d-flex flex-row justify-content-center align-items-center g-2">
          {whatsAppSvg}
          <p className="me-3 ms-2 pt-1 flex-shrink flex-grow">+56 9 5163 1370</p>
          <Button
            className="btn"
            style={{
              backgroundColor: "#fca311",
              color: "#000",
              hover: { backgroundColor: "#f4f4f4", color: "#000" },
              boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)",
              active: { backgroundColor: "#ce840e" },
              border: "none",
              borderRadius: "0.25rem",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
            type="button"
            size="sm"
            aria-label="Cotiza ahora"
            onClick={handleClick}
          >
            Cotiza ahora
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
