import React from "react";
import Link from "next/link";
import { Button, Card, Col, Row } from "react-bootstrap";
import data from "@/data/Main/products.json";

function Intro({ lightMode }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    throw new Error("data is not defined or is empty");
  }

  try {
    return (
      <section className="about section-padding main-bg">
        <div className="container ontop">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4">
              <div className="section-head mb-60">
                <h3 className="mb-20 fs-3 fw-bold">PRODUCTOS DESTACADOS</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <Row xs={1} md={3} lg={4} className="g-4">
              {data.map((item, idx) => (
                <Col key={idx}>
                  <Card
                    className="card__item mb-25"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <Card.Img
                      style={{
                        height: "19rem",
                        objectFit: "cover",
                      }}
                      variant="top"
                      src={item.image}
                      alt={item.title}
                    />
                    <Card.Body className="d-flex flex-row justify-content-between align-items-center px-0">
                      <div className="card__content d-flex flex-column justify-content-center align-items-start mb-3">
                        <Card.Title style={{ fontSize: "0.8rem" }}>
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          style={{
                            fontSize: "0.6rem",
                          }}
                        >
                          {item.subtitle}
                        </Card.Text>
                      </div>
                      <div className="buttons__group d-flex flex-column justify-content-center align-items-end gap-2">
                        <Button
                          type="button"
                          className="top__navbar-button text-light"
                          size="sm"
                          as={Link}
                          href="/light/page-portfolio/project-details"
                          style={{ fontSize: "0.9rem" }}
                        >
                          COMPRAR
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-dark"
                          size="sm"
                          variant="dark"
                          as={Link}
                          href="/light/page-portfolio/project-details"
                          style={{ fontSize: "0.7rem" }}
                        >
                          MAS INFO
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return <div>Error al renderizar la sección de productos</div>;
  }
}

export default Intro;
