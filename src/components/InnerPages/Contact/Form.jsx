import { facebookSvg, instagramSvg } from "@/data/icons";
import React, { useState } from "react";
import { Form as RBForm, Button, Row, Col, Alert } from "react-bootstrap";

function Form() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [details, setDetails] = useState({
    productType: "",
    product: "",
    material: "",
    width: "",
    height: "",
    quantity: 1,
    fileName: "",
    fileData: null, // base64 (opcional)
    deliveryDate: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Opciones (ajusta según necesites)
  const productTypes = [
    { value: "impreso", label: "Impreso" },
    { value: "textil", label: "Textil" },
    { value: "packaging", label: "Packaging" },
  ];
  const productsByType = {
    impreso: ["Volantes", "Brochure", "Afiche"],
    textil: ["Polera", "Gorro", "Bolsa"],
    packaging: ["Caja", "Etiqueta", "Envelope"],
  };
  const materials = ["Papel couchê", "Cartulina", "Vinilo", "Algodón"];
  const sizes = Array.from({ length: 40 }, (_, i) => (i + 1) * 5); // 5,10,...200 cm
  const quantities = Array.from({ length: 100 }, (_, i) => i + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setDetails((d) => ({ ...d, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setDetails((d) => ({ ...d, fileName: "", fileData: null }));
      return;
    }
    const allowed = ["pdf", "jpg", "jpeg", "ai", "eps", "png"];
    const ext = file.name.split(".").pop().toLowerCase();
    if (!allowed.includes(ext)) {
      setErrors((prev) => ({
        ...prev,
        file: "Formato no permitido. (pdf, jpg, jpeg, ai, eps, png)",
      }));
      setDetails((d) => ({ ...d, fileName: "", fileData: null }));
      return;
    }
    setErrors((prev) => ({ ...prev, file: undefined }));
    // convertir a base64 (opcional — se envía en el payload para que el backend lo trate)
    const toBase64 = (f) =>
      new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onerror = () => rej("Error leyendo archivo");
        reader.onload = () => res(reader.result);
        reader.readAsDataURL(f);
      });
    try {
      const dataUrl = await toBase64(file);
      setDetails((d) => ({ ...d, fileName: file.name, fileData: dataUrl }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, file: "No se pudo leer el archivo." }));
    }
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Nombre requerido";
    if (!form.company.trim()) err.company = "Empresa requerida";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email || "")) err.email = "Email inválido";
    const phoneDigits = (form.phone || "").replace(/\D/g, "");
    if (phoneDigits.length < 7) err.phone = "Teléfono inválido";

    // detalles
    if (!details.productType) err.productType = "Seleccione tipo de producto";
    if (!details.product) err.product = "Seleccione producto";
    if (!details.material) err.material = "Seleccione material";
    if (!details.width || Number(details.width) <= 0)
      err.width = "Seleccione ancho válido";
    if (!details.height || Number(details.height) <= 0)
      err.height = "Seleccione alto válido";
    if (!details.quantity || Number(details.quantity) < 1)
      err.quantity = "Cantidad inválida";
    if (!details.deliveryDate)
      err.deliveryDate = "Seleccione fecha estimada de entrega";
    // fecha no anterior a hoy
    if (details.deliveryDate) {
      const sel = new Date(details.deliveryDate);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (sel < hoy) err.deliveryDate = "La fecha debe ser hoy o posterior";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const resetDetails = () => {
    setDetails({
      productType: "",
      product: "",
      material: "",
      width: "",
      height: "",
      quantity: 1,
      fileName: "",
      fileData: null,
      deliveryDate: "",
      comments: "",
    });
    setErrors((e) => {
      const copy = { ...e };
      delete copy.productType;
      delete copy.product;
      delete copy.material;
      delete copy.width;
      delete copy.height;
      delete copy.quantity;
      delete copy.file;
      delete copy.deliveryDate;
      delete copy.comments;
      return copy;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    if (!validate()) return;
    setLoading(true);
    try {
      const payload = { ...form, details };
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Error servidor");
      setStatus({
        type: "success",
        message: "Solicitud enviada. Revisaremos y responderemos por correo.",
      });
      setForm({ name: "", company: "", email: "", phone: "" });
      resetDetails();
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Error enviando" });
    } finally {
      setLoading(false);
    }
  };

  const currentProducts = productsByType[details.productType] || [];

  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <h2 className="fz-40 text-center mb-70">COTIZACIÓN EXPRESS</h2>

        {status.type === "success" && (
          <Alert variant="success">{status.message}</Alert>
        )}
        {status.type === "error" && (
          <Alert variant="danger">{status.message}</Alert>
        )}

        <RBForm onSubmit={handleSubmit} noValidate>
          <div className="row">
            <article className="col-lg-5">
              <div className="sec-lg-head mb-80">
                <h2 className="fz-20">
                  Solicita tu cotización <b className="fst-italic">EXPRESS</b>
                </h2>
                <p className="fz-15 mt-10">
                  Complete el formulario y recibirá un correo con los datos.
                </p>
              </div>
              <div className="full-width">
                {status.type === "success" && (
                  <Alert variant="success">{status.message}</Alert>
                )}
                {status.type === "error" && (
                  <Alert variant="danger">{status.message}</Alert>
                )}

                <RBForm onSubmit={handleSubmit} noValidate>
                  <Row className="g-3 d-flex flex-column">
                    <Col md={12}>
                      <RBForm.Group
                        className="mb-3 d-flex flex-row align-items-center justify-content-between"
                        controlId="name"
                      >
                        <RBForm.Label className="me-2 text-center d-flex flex-row align-items-center">
                          Nombre completo
                        </RBForm.Label>
                        <RBForm.Control
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          placeholder="ESCRIBE TU NOMBRE"
                          style={{
                            width: "70%",
                            border: "none",
                            fontWeight: "500",
                            fontSize: "0.7rem",
                            backgroundColor: "#9191912a",
                          }}
                        />
                        <RBForm.Control.Feedback type="invalid">
                          {errors.name}
                        </RBForm.Control.Feedback>
                      </RBForm.Group>
                    </Col>

                    <Col md={12}>
                      <RBForm.Group
                        className="mb-3 d-flex flex-row justify-content-between align-items-center"
                        controlId="company"
                      >
                        <RBForm.Label>Empresa</RBForm.Label>
                        <RBForm.Control
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          isInvalid={!!errors.company}
                          placeholder="Empresa"
                          style={{
                            width: "80%",
                            border: "none",
                            fontWeight: "500",
                            fontSize: "0.7rem",
                            backgroundColor: "#9191912a",
                          }}
                        />
                        <RBForm.Control.Feedback type="invalid">
                          {errors.company}
                        </RBForm.Control.Feedback>
                      </RBForm.Group>
                    </Col>
                    <Col md={12}>
                      <RBForm.Group
                        className="mb-3 d-flex flex-row justify-content-between align-items-center"
                        controlId="email"
                      >
                        <RBForm.Label>Correo electrónico</RBForm.Label>
                        <RBForm.Control
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="correo@ejemplo.com"
                          style={{
                            width: "70%",
                            border: "none",
                            fontWeight: "500",
                            fontSize: "0.7rem",
                            backgroundColor: "#9191912a",
                          }}
                        />
                        <RBForm.Control.Feedback type="invalid">
                          {errors.email}
                        </RBForm.Control.Feedback>
                      </RBForm.Group>
                    </Col>

                    <Col md={12}>
                      <RBForm.Group
                        className="mb-3 d-flex flex-row justify-content-between align-items-center"
                        controlId="phone"
                      >
                        <RBForm.Label>Teléfono</RBForm.Label>
                        <RBForm.Control
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          placeholder="+56 9 1234 5678"
                          style={{
                            width: "80%",
                            border: "none",
                            fontWeight: "500",
                            fontSize: "0.7rem",
                            backgroundColor: "#9191912a",
                          }}
                        />
                        <RBForm.Control.Feedback type="invalid">
                          {errors.phone}
                        </RBForm.Control.Feedback>
                      </RBForm.Group>
                    </Col>
                  </Row>
                </RBForm>
              </div>
            </article>

            <article className="col-lg-6 offset-lg-1 valign">
              <Row className="g-3">
                <Col md={12}>
                  <RBForm.Group
                    className="mb-3 d-flex flex-row justify-content-between align-items-center"
                    controlId="productType"
                  >
                    <RBForm.Label>Tipo de producto</RBForm.Label>
                    <RBForm.Select
                      name="productType"
                      value={details.productType}
                      onChange={handleDetailChange}
                      isInvalid={!!errors.productType}
                      style={{
                        width: "70%",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.7rem",
                        backgroundColor: "#9191912a",
                      }}
                    >
                      <option value="">- Seleccionar -</option>
                      {productTypes.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </RBForm.Select>
                    <RBForm.Control.Feedback type="invalid">
                      {errors.productType}
                    </RBForm.Control.Feedback>
                  </RBForm.Group>
                </Col>

                <Col md={12}>
                  <RBForm.Group
                    className="mb-3 d-flex flex-row justify-content-between align-items-center"
                    controlId="material"
                  >
                    <RBForm.Label>Material deseado</RBForm.Label>
                    <RBForm.Select
                      name="material"
                      value={details.material}
                      onChange={handleDetailChange}
                      isInvalid={!!errors.material}
                      style={{
                        width: "70%",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.7rem",
                        backgroundColor: "#9191912a",
                      }}
                    >
                      <option value="">- Seleccionar -</option>
                      {materials.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </RBForm.Select>
                    <RBForm.Control.Feedback type="invalid">
                      {errors.material}
                    </RBForm.Control.Feedback>
                  </RBForm.Group>
                </Col>

                <section className="d-flex flex-row justify-content-between align-items-center w-100">
                  <RBForm.Label>Medidas (cm.)</RBForm.Label>
                  <Col md={6}>
                    <RBForm.Group className="mb-3" controlId="width">
                      <RBForm.Select
                        name="width"
                        value={details.width}
                        onChange={handleDetailChange}
                        isInvalid={!!errors.width}
                        style={{
                          width: "50%",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.7rem",
                          backgroundColor: "#9191912a",
                        }}
                      >
                        <option value="">- Ancho -</option>
                        {sizes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </RBForm.Select>
                      <RBForm.Control.Feedback type="invalid">
                        {errors.width}
                      </RBForm.Control.Feedback>
                    </RBForm.Group>
                  </Col>
                  <Col md={6}>
                    <RBForm.Group className="mb-3" controlId="height">
                      <RBForm.Select
                        name="height"
                        value={details.height}
                        onChange={handleDetailChange}
                        isInvalid={!!errors.height}
                        style={{
                          width: "50%",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.7rem",
                          backgroundColor: "#9191912a",
                        }}
                      >
                        <option value="">- Alto -</option>
                        {sizes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </RBForm.Select>
                      <RBForm.Control.Feedback type="invalid">
                        {errors.height}
                      </RBForm.Control.Feedback>
                    </RBForm.Group>
                  </Col>
                </section>

                <Col md={6}>
                  <RBForm.Group className="mb-3" controlId="quantity">
                    <RBForm.Label>Cantidad</RBForm.Label>
                    <RBForm.Select
                      name="quantity"
                      value={details.quantity}
                      onChange={handleDetailChange}
                      isInvalid={!!errors.quantity}
                    >
                      {quantities.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </RBForm.Select>
                    <RBForm.Control.Feedback type="invalid">
                      {errors.quantity}
                    </RBForm.Control.Feedback>
                  </RBForm.Group>
                </Col>

                <Col md={6}>
                  <RBForm.Group className="mb-3" controlId="file">
                    <RBForm.Label>
                      Adjuntar archivo (pdf, jpg, ai, eps)
                    </RBForm.Label>
                    <RBForm.Control
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.ai,.eps,.png"
                      onChange={handleFileChange}
                    />
                    {details.fileName && (
                      <div className="small mt-1">
                        Archivo: {details.fileName}
                      </div>
                    )}
                    {errors.file && (
                      <div className="text-danger small">{errors.file}</div>
                    )}
                  </RBForm.Group>
                </Col>

                <Col md={12}>
                  <RBForm.Group className="mb-3" controlId="deliveryDate">
                    <RBForm.Label>Fecha de entrega estimada</RBForm.Label>
                    <RBForm.Control
                      type="date"
                      name="deliveryDate"
                      value={details.deliveryDate}
                      onChange={handleDetailChange}
                      isInvalid={!!errors.deliveryDate}
                    />
                    <RBForm.Control.Feedback type="invalid">
                      {errors.deliveryDate}
                    </RBForm.Control.Feedback>
                  </RBForm.Group>
                </Col>

                <Col md={12}>
                  <RBForm.Group className="mb-3" controlId="comments">
                    <RBForm.Label>Comentario adicional</RBForm.Label>
                    <RBForm.Control
                      as="textarea"
                      rows={4}
                      name="comments"
                      value={details.comments}
                      onChange={handleDetailChange}
                      placeholder="Describe aquí información adicional..."
                      maxLength={1000}
                    />
                    <div className="small text-muted mt-1">
                      {details.comments.length}/1000
                    </div>
                  </RBForm.Group>
                </Col>

                <Col md={12} className="d-flex justify-content-between mt-3">
                  <Button
                    variant="secondary"
                    onClick={resetDetails}
                    disabled={loading}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" variant="success" disabled={loading}>
                    {loading ? "Enviando..." : "Solicitar cotización"}
                  </Button>
                </Col>
              </Row>
            </article>
          </div>
        </RBForm>
      </div>
    </section>
  );
}

export default Form;
