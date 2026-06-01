import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { name, company, email, phone, details, message } = req.body || {};

  if (!name || !company || !email || !phone) {
    res.status(400).json({ message: "Faltan campos requeridos." });
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
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
    html += `<p><b>Nombre:</b> ${name}</p>`;
    html += `<p><b>Empresa:</b> ${company}</p>`;
    html += `<p><b>Email:</b> ${email}</p>`;
    html += `<p><b>Teléfono:</b> ${phone}</p>`;
    if (details) {
      html += `<pre>${JSON.stringify(details, null, 2)}</pre>`;
    }
    if (message) {
      html += `<p><b>Mensaje:</b> ${message}</p>`;
    }

    const mailOptions = {
      from: `Web Contact <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      subject: `Nuevo contacto de ${name} (${company})`,
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
