import EMAIL_API from "@/config/emailApi";
import dynamic from "next/dynamic";
import { getRecaptchaSiteKey } from "@/config/recaptcha";
import { useAutoSave } from "@/utils/hooks/useAutoSave";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Form as RBForm, Button, ProgressBar, Modal } from "react-bootstrap";
import { FaWhatsapp, FaEye, FaCheckCircle } from "react-icons/fa";
import ContactInfoFields from "./ContactInfoFields";
import ProductDetailsFields from "./ProductDetailsFields";
import FileUploadField from "./FileUploadField";

import { useFormValidation } from "@/utils/hooks/useFormValidation";
import { useFileUpload } from "@/utils/hooks/useFileUpload";

import {
  calculateProgress,
  loadFromLocalStorage,
  sanitizeInput,
  formatPhoneNumber,
  generateWhatsAppMessage,
} from "@/utils/formHelpers";

const PRODUCT_TYPES = {
  impresos: [
    "Tarjeta de presentación",
    "Sticker",
    "Calendario",
    "Carpeta",
    "Volante",
    "Folleto",
    "Póster",
    "Banner",
    "Otros",
  ],
  textil: ["Polera", "Gorro", "Bolsa"],
  packaging: ["Caja", "Etiqueta", "Envelope", "Otros"],
};

const MATERIALS = ["Papel couchê", "Cartulina", "Vinilo", "Algodón"];
const SIZES = Array.from({ length: 40 }, (_, i) => (i + 1) * 5); // 5,10,...200 cm
const QUANTITIES = Array.from({ length: 100 }, (_, i) => i + 1);

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

function Form() {
  // Estados principales del formulario
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
    fileData: null,
    deliveryDate: "",
    comments: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [showStatusModal, setShowStatusModal] = useState(false);
  const STATUS_AUTO_CLOSE = 4000; // ms
  const [loading, setLoading] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const recaptchaSiteKey = useMemo(() => getRecaptchaSiteKey(), []);
  const isRecaptchaConfigured = Boolean(recaptchaSiteKey);
  const usesSameOriginContactApi = EMAIL_API.sendContact.startsWith("/");

  const safeDraftDetails = useMemo(
    () => ({
      productType: details.productType,
      product: details.product,
      material: details.material,
      width: details.width,
      height: details.height,
      quantity: details.quantity,
      deliveryDate: details.deliveryDate,
    }),
    [
      details.productType,
      details.product,
      details.material,
      details.width,
      details.height,
      details.quantity,
      details.deliveryDate,
    ],
  );

  // Hooks personalizados
  const {
    errors,
    touched,
    validateField,
    handleBlur,
    validateAll,
    clearAllErrors,
    focusFirstError,
  } = useFormValidation();

  const {
    fileDetails,
    fileError,
    isProcessing,
    handleFileSelect,
    processFile,
    clearFile,
  } = useFileUpload();

  // Auto-guardar en localStorage
  const { clearSaved } = useAutoSave(
    "quotation-draft",
    {},
    safeDraftDetails,
    true,
  );

  // Cargar datos guardados al montar el componente
  useEffect(() => {
    const savedData = loadFromLocalStorage("quotation-draft");
    if (savedData) {
      if (savedData.details) {
        setDetails((prev) => ({
          ...prev,
          ...savedData.details,
          fileData: null, // No cargar archivo (muy pesado)
          fileName: "",
          comments: "",
        }));
      }
      console.log("📥 Datos del formulario recuperados");
    }

    return () => {
      // Cleanup function
    };
  }, []);

  useEffect(() => {
    if (!usesSameOriginContactApi) return;

    const loadCsrfToken = async () => {
      try {
        const res = await fetch("/api/csrf-token", {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data?.csrfToken) {
          setCsrfToken(data.csrfToken);
        }
      } catch {
        // Si falla la carga del token, se informa al intentar enviar.
      }
    };

    loadCsrfToken();
  }, [usesSameOriginContactApi]);

  // Calcular progreso del formulario
  const progress = useMemo(
    () => calculateProgress(form, details),
    [form, details],
  );

  // Mostrar modal cuando status cambia a éxito o error
  useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      setShowStatusModal(true);
      const timer = setTimeout(() => {
        setShowStatusModal(false);
        setStatus({ type: "", message: "" });
      }, STATUS_AUTO_CLOSE);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Usar constantes definidas fuera del componente

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      let sanitizedValue = sanitizeInput(value);

      // Formatear teléfono automáticamente
      if (name === "phone") {
        sanitizedValue = formatPhoneNumber(value);
      }

      setForm((s) => ({ ...s, [name]: sanitizedValue }));

      // Validar campo si ya fue tocado
      if (touched[name]) {
        validateField(name, sanitizedValue, {
          ...form,
          [name]: sanitizedValue,
        });
      }
    },
    [touched, validateField, form],
  );

  const handleDetailChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const sanitizedValue = sanitizeInput(value);

      setDetails((d) => {
        // Si cambia el tipo de producto, limpiar el producto específico seleccionado
        if (name === "productType") {
          return { ...d, [name]: sanitizedValue, product: "" };
        }
        return { ...d, [name]: sanitizedValue };
      });

      // Validar campo si ya fue tocado
      if (touched[name]) {
        validateField(name, sanitizedValue, {
          ...details,
          [name]: sanitizedValue,
        });
      }
    },
    [touched, validateField, details],
  );

  // El manejo de archivos ahora se hace con el hook useFileUpload
  // handleFileSelect está disponible desde el hook

  const resetDetails = useCallback(() => {
    setDetails({
      productType: "",
      product: "",
      material: "",
      width: "",
      height: "",
      quantity: 1,
      fileName: "",
      fileData: null,
      fileSize: null,
      fileType: null,
      deliveryDate: "",
      comments: "",
    });

    clearFile(); // Usar la función del hook
    clearAllErrors();
  }, [clearFile, clearAllErrors]);

  // Función separada para enviar email de respaldo
  const sendBackupEmail = useCallback(
    async (formData, detailsData, recaptchaValue, csrfHeaderToken) => {
      try {
        if (process.env.NODE_ENV === "development") {
          console.log("📧 Iniciando envío de email de respaldo...");
        }

        const payload = {
          ...formData,
          details: detailsData,
          recaptchaToken: recaptchaValue,
        };

        // Calcular tamaño aproximado del payload
        const payloadSize = JSON.stringify(payload).length;
        const payloadSizeMB = (payloadSize / 1024 / 1024).toFixed(2);
        if (process.env.NODE_ENV === "development") {
          console.log(`📏 Tamaño del payload: ${payloadSizeMB}MB`);
        }

        // Manejar archivos grandes
        let fileRemoved = false;
        if (detailsData.fileData && payloadSize > 8000000) {
          // ~8MB
          console.warn(
            `⚠️ Payload muy grande (${payloadSizeMB}MB), removiendo archivo adjunto para email de respaldo`,
          );
          payload.details = {
            ...payload.details,
            fileData: null,
            fileNote: `Archivo adjunto demasiado grande para email: ${
              detailsData.fileName
            }${
              detailsData.fileSize
                ? ` (${(detailsData.fileSize / 1024 / 1024).toFixed(2)}MB)`
                : ""
            }`,
          };
          fileRemoved = true;
        } else if (detailsData.fileData) {
          const fileSizeMB = detailsData.fileSize
            ? (detailsData.fileSize / 1024 / 1024).toFixed(2)
            : "N/A";
          if (process.env.NODE_ENV === "development") {
            console.log(`📎 Incluyendo archivo en email (${fileSizeMB}MB)`);
          }
        }

        // Crear un AbortController para timeout (aumentamos a 30 segundos)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos timeout

        const startTime = Date.now();
        const headers = { "Content-Type": "application/json" };
        if (usesSameOriginContactApi) {
          headers["x-csrf-token"] = csrfHeaderToken;
        }

        const emailResponse = await fetch(EMAIL_API.sendContact, {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const duration = Date.now() - startTime;
        if (process.env.NODE_ENV === "development") {
          console.log(`⏱️ Tiempo de respuesta: ${duration}ms`);
        }

        if (emailResponse.ok) {
          const emailResult = await emailResponse.json();
          if (process.env.NODE_ENV === "development") {
            console.log("✅ Email de respaldo enviado correctamente");
          }
          if (process.env.NODE_ENV === "development" && emailResult.messageId) {
            console.log("🆔 Message ID:", emailResult.messageId);
          }
        } else {
          const errorText = await emailResponse.text();
          console.error(
            "⚠️ Error al enviar email de respaldo (",
            emailResponse.status,
            "):",
            errorText,
          );
        }
      } catch (emailErr) {
        if (emailErr.name === "AbortError") {
          console.log("⏱️ Timeout del email de respaldo (30 segundos)");
        } else {
          console.error(
            "❌ Error inesperado en email de respaldo:",
            emailErr.message,
          );
        }
        // No mostramos error al usuario ya que WhatsApp es el canal principal
      }
    },
    [usesSameOriginContactApi],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus({ type: "", message: "" });

      // Rate limiting - evitar spam de envíos
      const now = Date.now();
      if (now - lastSubmit < 5000) {
        setStatus({
          type: "error",
          message: "Por favor espera 5 segundos entre envíos",
        });
        return;
      }

      // Validar todos los campos
      if (!validateAll(form, details)) {
        setStatus({
          type: "error",
          message:
            "Por favor, completa todos los campos requeridos correctamente.",
        });
        focusFirstError();
        return;
      }

      // Validar reCAPTCHA
      if (!isRecaptchaConfigured) {
        setStatus({
          type: "error",
          message: "reCAPTCHA no está configurado para este entorno.",
        });
        return;
      }
      if (!recaptchaToken) {
        setStatus({
          type: "error",
          message: "Por favor completa el reCAPTCHA para continuar.",
        });
        return;
      }
      if (usesSameOriginContactApi && !csrfToken) {
        setStatus({
          type: "error",
          message:
            "Token de seguridad no disponible. Recarga la página e intenta nuevamente.",
        });
        return;
      }

      setLoading(true);
      setLastSubmit(now);

      try {
        // Procesar archivo si existe (lazy loading)
        let processedFileDetails = { ...fileDetails };
        if (fileDetails.fileName && !fileDetails.fileData) {
          console.log("🔄 Procesando archivo antes de enviar...");
          const processed = await processFile();
          if (processed) {
            processedFileDetails = processed;
          }
        }

        // Combinar detalles con archivo procesado
        const finalDetails = {
          ...details,
          fileName: processedFileDetails.fileName,
          fileData: processedFileDetails.fileData,
          fileSize: processedFileDetails.fileSize,
          fileType: processedFileDetails.fileType,
        };

        // Generar mensaje de WhatsApp
        const message = generateWhatsAppMessage(form, finalDetails);

        // Número de WhatsApp
        const whatsappNumber =
          process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56920390272";

        // Crear URL de WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message,
        )}`;

        console.log("✅ WhatsApp URL generada");

        // Mostrar mensaje de éxito
        const successMessage = finalDetails.fileName
          ? `¡Gracias por contactarnos! Te responderemos pronto. Serás redirigido a WhatsApp en breve.`
          : "¡Gracias por contactarnos! Serás redirigido a WhatsApp. Te responderemos pronto.";

        setStatus({
          type: "success",
          message: successMessage,
        });

        // Abrir WhatsApp después de 1 segundo
        setTimeout(() => {
          window.open(whatsappURL, "_blank", "noopener,noreferrer");
        }, 1000);

        // Backup de datos antes de limpiar
        const formBackup = { ...form };
        const detailsBackup = { ...finalDetails };

        // Limpiar formulario
        setForm({ name: "", company: "", email: "", phone: "" });
        resetDetails();
        clearAllErrors();
        clearSaved(); // Limpiar localStorage después de envío exitoso

        // Enviar email de respaldo de forma asíncrona
        sendBackupEmail(formBackup, detailsBackup, recaptchaToken, csrfToken);
        setRecaptchaToken(""); // Limpiar reCAPTCHA tras envío
      } catch (err) {
        console.error("❌ Error en envío:", err);
        setStatus({
          type: "error",
          message:
            err.message || "Error al enviar. Por favor intenta nuevamente.",
        });
      } finally {
        setLoading(false);
      }
    },
    [
      lastSubmit,
      validateAll,
      form,
      details,
      recaptchaToken,
      focusFirstError,
      fileDetails,
      resetDetails,
      clearAllErrors,
      clearSaved,
      processFile,
      isRecaptchaConfigured,
      usesSameOriginContactApi,
      csrfToken,
      sendBackupEmail,
    ],
  );

  // Memoizar productos disponibles
  const currentProducts = useMemo(
    () => PRODUCT_TYPES[details.productType] || [],
    [details.productType],
  );

  // Manejar vista previa del mensaje
  const handlePreview = useCallback(() => {
    setShowPreview(true);
  }, []);

  const handleClosePreview = useCallback(() => {
    setShowPreview(false);
  }, []);

  return (
    <section
      id="cotizacion-form"
      className="contact-crev section-padding form-elegant"
      role="region"
      aria-labelledby="form-title"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container">
        <div className="text-center mb-5">
          <span className="eg-section-eyebrow">Respuesta en 24 Horas</span>
          <h1 id="form-title" className="eg-section-title" itemProp="name">
            Solicita tu <span className="accent-color">Cotización</span>
          </h1>
          <p className="eg-section-description" itemProp="description">
            Cuéntanos tu proyecto y recibe un presupuesto personalizado de{" "}
            <strong>implementos publicitarios</strong> en Viña del Mar,
            Valparaiso y V Region
          </p>
        </div>

        {/* Indicador de progreso mejorado */}
        {progress > 0 && progress < 100 && (
          <div className="form-progress-container mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="progress-label">
                {progress < 50 ? "📝 Completando información" : "✨ Casi listo"}
              </span>
              <span className="progress-percentage">{progress}%</span>
            </div>
            <ProgressBar
              now={progress}
              variant="warning"
              className="form-progress-bar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progreso del formulario: ${progress}%`}
            />
          </div>
        )}

        {/* Modal de estado (éxito/error) */}
        <Modal
          show={showStatusModal}
          onHide={() => {
            setShowStatusModal(false);
            setStatus({ type: "", message: "" });
          }}
          centered
          backdrop="static"
          keyboard={true}
          className="status-modal-elegant"
        >
          <Modal.Header
            closeButton
            className={
              status.type === "success" ? "border-success" : "border-danger"
            }
          >
            <Modal.Title className="d-flex align-items-center gap-2">
              {status.type === "success" ? (
                <FaCheckCircle size={22} color="#25D366" />
              ) : (
                <span style={{ fontSize: 22, color: "#dc3545" }}>⛔</span>
              )}
              {status.type === "success" ? "¡Solicitud enviada!" : "Error"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="mb-0">{status.message}</p>
          </Modal.Body>
        </Modal>

        <RBForm onSubmit={handleSubmit} noValidate role="form">
          <div className="row d-flex flex-row flex-wrap">
            {/* Datos del cliente */}
            <article className="col-lg-5 col-12 mb-4 mb-lg-0">
              <div className="sec-lg-head mb-50">
                <h2 className="eg-section-title">
                  Solicita tu cotizacion{" "}
                  <b className="accent-color fst-italic ">EXPRESS</b>
                </h2>
                <p className="eg-section-description">
                  Completa este formulario y recibe tu cotización en{" "}
                  <strong>menos de 24 horas</strong>. Trabajamos con empresas en
                  Viña del Mar, Valparaiso y V Region ofreciendo:
                </p>
                <ul className="benefits-list">
                  <li>✓ Señalética corporativa</li>
                  <li>✓ Material POP personalizado</li>
                  <li>✓ Gigantografías y letreros</li>
                  <li>✓ Merchandising de calidad</li>
                </ul>
              </div>
              <div className="full-width">
                <ContactInfoFields
                  form={form}
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </article>

            {/* Detalles del producto y botones de acción */}
            <article className="col-lg-6 offset-lg-1 col-12">
              <ProductDetailsFields
                details={details}
                errors={errors}
                touched={touched}
                onChange={handleDetailChange}
                onBlur={handleBlur}
                productTypes={Object.keys(PRODUCT_TYPES).map((key) => ({
                  value: key,
                  label: key.charAt(0).toUpperCase() + key.slice(1),
                }))}
                currentProducts={currentProducts}
                materials={MATERIALS}
                sizes={SIZES}
                quantities={QUANTITIES}
                fileDetails={fileDetails}
                fileError={fileError}
                onFileChange={handleFileSelect}
              />
              {/* reCAPTCHA Google */}
              <div className="my-3 d-flex justify-content-center">
                {isRecaptchaConfigured ? (
                  <ReCAPTCHA
                    sitekey={recaptchaSiteKey}
                    onChange={(token) => setRecaptchaToken(token || "")}
                    onExpired={() => setRecaptchaToken("")}
                    onErrored={() => setRecaptchaToken("")}
                  />
                ) : (
                  <div
                    style={{
                      color: "#dc3545",
                      fontSize: 13,
                      textAlign: "center",
                    }}
                  >
                    reCAPTCHA no configurado. Define
                    NEXT_PUBLIC_RECAPTCHA_SITE_KEY en Vercel.
                  </div>
                )}
              </div>
              {/* Botones de acción debajo de productos */}
              <div className="form-actions-elegant mt-4 d-flex flex-wrap gap-2 justify-content-center">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handlePreview}
                  disabled={loading || progress < 50}
                  className="btn-elegant btn-preview"
                  aria-label="Previsualizar mensaje antes de enviar"
                  title="Previsualizar mensaje de WhatsApp"
                  style={{
                    minWidth: 160,
                    fontWeight: 600,
                    borderRadius: 8,
                    boxShadow: "0 2px 8px #6c757d22",
                    border: "1.5px solid #6c757d",
                    background: "#f8f9fa",
                    color: "#343a40",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#e2e6ea";
                    e.currentTarget.style.color = "#212529";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#f8f9fa";
                    e.currentTarget.style.color = "#343a40";
                  }}
                >
                  <FaEye />
                  <span className="ms-2">Previsualizar WhatsApp</span>
                </Button>
                <Button
                  variant="secondary"
                  onClick={resetDetails}
                  disabled={loading}
                  className="btn-elegant btn-reset"
                  aria-label="Borrar todo el formulario"
                  title="Borrar todos los campos"
                  style={{
                    minWidth: 120,
                    fontWeight: 600,
                    borderRadius: 8,
                    boxShadow: "0 2px 8px #6c757d22",
                    border: "1.5px solid #6c757d",
                    background: "#f8f9fa",
                    color: "#343a40",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#e2e6ea";
                    e.currentTarget.style.color = "#212529";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#f8f9fa";
                    e.currentTarget.style.color = "#343a40";
                  }}
                >
                  Borrar Todo
                </Button>
                <Button
                  type="submit"
                  className="btn-elegant btn-whatsapp whatsapp-green"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    border: "none",
                    boxShadow: "0 2px 8px #25d36644",
                  }}
                  disabled={loading || isProcessing || progress < 30}
                  aria-label="Enviar cotización por WhatsApp"
                  title="Tu solicitud será enviada por WhatsApp"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#1ebe57")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#25D366")
                  }
                >
                  {loading || isProcessing ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Procesando...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp size={20} />
                      <span className="ms-3">Enviar por WhatsApp</span>
                    </>
                  )}
                </Button>
              </div>
            </article>
          </div>
        </RBForm>
      </div>
    </section>
  );
}

export default Form;
