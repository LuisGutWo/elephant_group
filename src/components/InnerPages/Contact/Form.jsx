import React, { useState } from "react";
import { Form as RBForm, Button, Row, Col, Alert } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

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
    impreso: [
      "Volantes",
      "Brochure",
      "Afiche",
      "Tarjeta de presentación",
      "Sticker",
      "Calendario",
      "Carpeta",
      "Otros",
    ],
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
    setDetails((d) => {
      // Si cambia el tipo de producto, limpiar el producto específico seleccionado
      if (name === "productType") {
        return { ...d, [name]: value, product: "" };
      }
      return { ...d, [name]: value };
    });
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

  // Función separada para enviar email de respaldo
  const sendBackupEmail = async (formData, detailsData) => {
    try {
      console.log("📧 Enviando email de respaldo...");
      const payload = { ...formData, details: detailsData };

      // Crear un AbortController para timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos timeout

      const emailResponse = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (emailResponse.ok) {
        const emailResult = await emailResponse.json();
        console.log(
          "✅ Email de respaldo enviado correctamente:",
          emailResult.message
        );
      } else {
        const emailError = await emailResponse.json();
        console.log(
          "⚠️ Error al enviar email de respaldo:",
          emailError.message
        );
      }
    } catch (emailErr) {
      if (emailErr.name === "AbortError") {
        console.log("⏱️ Timeout del email de respaldo");
      } else {
        console.log("❌ Email backup failed:", emailErr);
      }
      // No mostramos error al usuario ya que WhatsApp es el canal principal
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    if (!validate()) {
      setStatus({
        type: "error",
        message:
          "Por favor, completa todos los campos requeridos correctamente.",
      });
      return;
    }
    setLoading(true);

    try {
      // Formatear mensaje para WhatsApp

      const message = `

${form.name ? `*NUEVA COTIZACIÓN EXPRESS*\n\n` : ""}

${form.name ? `*DATOS DEL CLIENTE*\n\n` : ""}
• Nombre: ${form.name || ""}
• Empresa: ${form.company || ""}
• Email: ${form.email || ""}
• Teléfono: ${form.phone || ""}

${details.productType ? `\n\n*DETALLES DEL PRODUCTO*\n\n` : ""}
• Tipo: ${details.productType || ""}
• Producto: ${details.product || ""}
• Material: ${details.material || ""}
• Medidas: ${details.width || ""}cm x ${details.height || ""}cm
• Cantidad: ${details.quantity || 1}
${details.fileName ? `\n\n• Archivo adjunto: ${details.fileName}` : ""}
• Fecha de entrega: ${details.deliveryDate || ""}
${details.comments ? `\n\n• Comentarios: ${details.comments}` : ""}

_Enviado desde el formulario web_
      `.trim();

      // Número de WhatsApp de la empresa (ajusta con tu número)
      // Formato: código de país + número sin espacios ni caracteres especiales
      const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56920390272";

      // Codificar mensaje para URL
      const encodedMessage = encodeURIComponent(message);

      // Crear URL de WhatsApp
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      console.log("WhatsApp URL:", whatsappURL); // Debug log

      // Mostrar mensaje de éxito inmediatamente
      setStatus({
        type: "success",
        message:
          "¡Gracias por contactarnos! Serás redirigido a WhatsApp. Te responderemos pronto.",
      });

      // Abrir WhatsApp en nueva ventana después de 1 segundo
      setTimeout(() => {
        window.open(whatsappURL, "_blank");
      }, 1000);

      // Guardar datos antes de limpiar el formulario
      const formBackup = { ...form };
      const detailsBackup = { ...details };

      // Limpiar formulario inmediatamente para mejorar UX
      setForm({ name: "", company: "", email: "", phone: "" });
      resetDetails();

      // Enviar email de respaldo de forma asíncrona (no bloquea la UI)
      sendBackupEmail(formBackup, detailsBackup);
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
          <div className="row d-flex flex-row">
            <article className="col-lg-5">
              <div className="sec-lg-head mb-60">
                <h2 className="fz-20">
                  Obtén tu Cotización <b className="fst-italic">EXPRESS</b>
                </h2>
                <p className="fz-15 mt-10">
                  Cuéntanos tu visión y recibe una propuesta personalizada al
                  instante. Nuestro equipo de asesores especializados está listo
                  para transformar tu marca con soluciones gráficas innovadoras,
                  presupuestos competitivos y entrega garantizada. ¡Lleva tu
                  identidad visual al siguiente nivel!
                </p>
              </div>
              <div className="full-width">
                {/* No anidar RBForm: usar el RBForm exterior que envuelve todo */}
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
                          color: "#9191919",
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
                        placeholder="ESCRIBE EL NOMBRE DE TU EMPRESA"
                        style={{
                          width: "80%",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.7rem",
                          color: "#9191919",
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
                        placeholder="ESCRIBE TU CORREO CORPORATIVO O PERSONAL"
                        style={{
                          width: "70%",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.7rem",
                          color: "#9191919",
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
                        placeholder="ESCRIBE TU WHATSAPP O TELÉFONO"
                        style={{
                          width: "80%",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.7rem",
                          color: "#9191919",
                          backgroundColor: "#9191912a",
                        }}
                      />
                      <RBForm.Control.Feedback type="invalid">
                        {errors.phone}
                      </RBForm.Control.Feedback>
                    </RBForm.Group>
                  </Col>
                </Row>
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
                        color: "#9191919",
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
                    controlId="product"
                  >
                    <RBForm.Label>Producto específico</RBForm.Label>
                    <RBForm.Select
                      name="product"
                      value={details.product}
                      onChange={handleDetailChange}
                      isInvalid={!!errors.product}
                      disabled={!details.productType}
                      style={{
                        width: "70%",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.7rem",
                        color: "#9191919",
                        backgroundColor: "#9191912a",
                      }}
                    >
                      <option value="">- Seleccionar producto -</option>
                      {currentProducts.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </RBForm.Select>
                    <RBForm.Control.Feedback type="invalid">
                      {errors.product}
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
                        color: "#9191919",
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

                <section className="mb-2 d-flex flex-row justify-content-start align-items-center">
                  <RBForm.Label className="me-3 mr-80">
                    Medidas (cm.)
                  </RBForm.Label>
                  <Col md={2}>
                    <RBForm.Group controlId="width">
                      <RBForm.Select
                        name="width"
                        value={details.width}
                        onChange={handleDetailChange}
                        isInvalid={!!errors.width}
                        style={{
                          width: "100%",
                          maxWidth: "100px",
                          height: "30px",
                          margin: "0",
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
                  <Col md={2}>
                    <RBForm.Group controlId="height">
                      <RBForm.Select
                        name="height"
                        value={details.height}
                        onChange={handleDetailChange}
                        isInvalid={!!errors.height}
                        style={{
                          width: "90%",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.7rem",
                          backgroundColor: "#9191912a",
                          marginRight: "1rem",
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
                  <Col md={2}>
                    <RBForm.Group
                      className="d-flex flex-row ms-2 align-items-center justify-content-start"
                      controlId="quantity"
                    >
                      <RBForm.Select
                        name="quantity"
                        value={details.quantity}
                        onChange={handleDetailChange}
                        isInvalid={!!errors.quantity}
                        style={{
                          width: "100%",
                          maxWidth: "100px",
                          height: "30px",
                          margin: "0",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.7rem",
                          color: "#9191919",
                          backgroundColor: "#9191912a",
                          marginLeft: "1.5rem",
                        }}
                        required
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
                </section>

                <Col md={12}>
                  <RBForm.Group
                    className="mb-3 mt-2 d-flex flex-row justify-content-start align-items-center"
                    controlId="file"
                  >
                    <RBForm.Label className="me-3 d-flex flex-row align-items-center">
                      Adjuntar archivo (pdf, jpg, ai, eps)
                    </RBForm.Label>
                    <RBForm.Control
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.ai,.eps,.png"
                      onChange={handleFileChange}
                      style={{
                        width: "60%",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.7rem",
                        backgroundColor: "#9191912a",
                      }}
                    />
                    {/* {details.fileName && (
                      <div className="small mt-1">
                        Archivo: {details.fileName}
                      </div>
                    )} */}
                    {errors.file && (
                      <div className="text-danger small">{errors.file}</div>
                    )}
                  </RBForm.Group>
                </Col>

                <Col md={12}>
                  <RBForm.Group
                    className="mb-3 d-flex flex-row justify-content-start align-items-center"
                    controlId="deliveryDate"
                  >
                    <RBForm.Label className="me-3">
                      Fecha de entrega estimada
                    </RBForm.Label>
                    <RBForm.Control
                      type="date"
                      name="deliveryDate"
                      value={details.deliveryDate}
                      onChange={handleDetailChange}
                      isInvalid={!!errors.deliveryDate}
                      style={{
                        width: "70%",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.7rem",
                        backgroundColor: "#9191912a",
                      }}
                    />
                    <RBForm.Control.Feedback type="invalid">
                      {errors.deliveryDate}
                    </RBForm.Control.Feedback>
                  </RBForm.Group>
                </Col>

                <Col md={12}>
                  <RBForm.Group
                    className="mb-3 d-flex flex-row justify-content-start align-items-between"
                    controlId="comments"
                  >
                    <RBForm.Label className="me-4">
                      Comentario adicional
                    </RBForm.Label>
                    <RBForm.Control
                      as="textarea"
                      rows={4}
                      name="comments"
                      value={details.comments}
                      onChange={handleDetailChange}
                      placeholder="Describe aquí información adicional..."
                      maxLength={1000}
                      style={{
                        width: "80%",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.7rem",
                        backgroundColor: "#9191912a",
                      }}
                    />
                    {/* <div className="small text-muted mt-1">
                      {details.comments.length ? details.comments.length : 0}
                      /1000
                    </div> */}
                  </RBForm.Group>
                </Col>

                <Col md={12} className="d-flex justify-content-end mt-3 gap-3">
                  <Button
                    variant="secondary"
                    onClick={resetDetails}
                    disabled={loading}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="text-light d-flex align-items-center gap-2"
                    variant="success"
                    disabled={loading}
                    style={{ backgroundColor: "#25D366" }}
                  >
                    {loading ? (
                      "Enviando..."
                    ) : (
                      <>
                        <FaWhatsapp size={20} />
                        Enviar por WhatsApp
                      </>
                    )}
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
