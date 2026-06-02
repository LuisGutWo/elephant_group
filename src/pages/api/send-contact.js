import nodemailer from "nodemailer";
import xss from "xss";
import { isValidCsrf } from "./_utils/csrf";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  if (!isValidCsrf(req)) {
    res.status(403).json({ message: "CSRF token inválido o ausente." });
    return;
  }

  const { name, company, email, phone, details, message, recaptchaToken } =
    req.body || {};

  if (!recaptchaToken) {
    res.status(400).json({ message: "Falta el token de reCAPTCHA." });
    return;
  }

  const secretKey =
    process.env.RECAPTCHA_SECRET_KEY ||
    (process.env.NODE_ENV === "development"
      ? "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
      : "");

  if (!secretKey) {
    res.status(500).json({ message: "RECAPTCHA_SECRET_KEY no configurada." });
    return;
  }

  try {
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      { method: "POST" },
    );
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      res.status(400).json({
        message: "Error de verificación reCAPTCHA. Intenta nuevamente.",
        details: recaptchaData["error-codes"] || [],
      });
      return;
    }
  } catch {
    res.status(400).json({ message: "No se pudo verificar reCAPTCHA." });
    return;
  }

  const sanitize = (str) => xss((str || "").trim());
  const safeName = sanitize(name);
  const safeCompany = sanitize(company);
  const safeEmail = sanitize(email);
  const safePhone = sanitize(phone);
  const safeMessage = sanitize(message);
  const safeDetails = details ? xss(JSON.stringify(details, null, 2)) : "";

  if (!safeName || !safeCompany || !safeEmail || !safePhone) {
    res.status(400).json({ message: "Faltan campos requeridos." });
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(safeEmail)) {
    res.status(400).json({ message: "Email inválido." });
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
      host: SMTP_HOST,
      port: 587,
      secure: false, // false para 587 (TLS)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let html = `<h2>Nuevo contacto desde el sitio web</h2>`;
    html += `<p><b>Nombre:</b> ${safeName}</p>`;
    html += `<p><b>Empresa:</b> ${safeCompany}</p>`;
    html += `<p><b>Email:</b> ${safeEmail}</p>`;
    html += `<p><b>Teléfono:</b> ${safePhone}</p>`;
    if (safeDetails) {
      html += `<pre>${safeDetails}</pre>`;
    }
    if (safeMessage) {
      html += `<p><b>Mensaje:</b> ${safeMessage}</p>`;
    }

    const mailOptions = {
      from: `Web Contact <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      subject: `Nuevo contacto de ${safeName} (${safeCompany})`,
      html,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error enviando correo", error: err.message });
  }
}
