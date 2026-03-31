import nodemailer from "nodemailer";
import xss from "xss";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { name, email, message } = req.body || {};
  // Sanitizar entradas para evitar XSS y caracteres peligrosos
  const sanitize = (str) => xss((str || "").trim());
  const trimmedName = sanitize(name);
  const trimmedEmail = sanitize(email);
  const trimmedMessage = sanitize(message);

  // Validaciones robustas backend
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function isSpammy(text) {
    if (!text) return true;
    const t = text.trim();
    if (t.length < 10) return true;
    if (/^(.)\1+$/.test(t)) return true;
    return false;
  }

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    res.status(400).json({ message: "Todos los campos son requeridos." });
    return;
  }
  if (trimmedName.length < 3 || trimmedName.length > 50) {
    res
      .status(400)
      .json({ message: "El nombre debe tener entre 3 y 50 caracteres." });
    return;
  }
  if (!isValidEmail(trimmedEmail) || trimmedEmail.length > 80) {
    res
      .status(400)
      .json({
        message: "Ingrese un correo electrónico válido (máx. 80 caracteres).",
      });
    return;
  }
  if (isSpammy(trimmedMessage) || trimmedMessage.length > 1000) {
    res
      .status(400)
      .json({
        message:
          "El mensaje debe tener entre 10 y 1000 caracteres y no ser repetitivo.",
      });
    return;
  }

  // Validar variables de entorno
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
    res
      .status(500)
      .json({ message: "Variables de entorno SMTP no configuradas" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.elephantgroup.cl",
      port: 587,
      secure: false, // false para 587 (TLS)
      auth: {
        user: "ventas@elephantgroup.cl",
        pass: ")3NOEsL)inezyYmR",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let html = `<h2>Nuevo contacto simple desde el sitio web</h2>`;
    html += `<p><b>Nombre:</b> ${trimmedName}</p>`;
    html += `<p><b>Email:</b> ${trimmedEmail}</p>`;
    html += `<p><b>Mensaje:</b> ${trimmedMessage}</p>`;

    const mailOptions = {
      from: `Web Contact <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      subject: `Nuevo contacto simple de ${name}`,
      html,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (err) {
    // Loguear error detallado solo en backend
    // eslint-disable-next-line no-console
    console.error("[API] Error enviando correo:", err);
    // No mostrar detalles técnicos al usuario
    res
      .status(500)
      .json({ message: "Error enviando correo. Intente más tarde." });
  }
}
