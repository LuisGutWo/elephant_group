import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, company, email, phone } = req.body || {};

  if (!name || !company || !email || !phone) {
    return res.status(400).json({ message: "Faltan campos requeridos." });
  }

  // Valida email simple
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return res.status(400).json({ message: "Email inválido." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465, // true para 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.CONTACT_RECIPIENT;
    if (!recipient) {
      return res.status(500).json({ message: "Destinatario no configurado." });
    }

    const subject = `Nuevo contacto: ${name} (${company})`;
    const text = `
Nombre: ${name}
Empresa: ${company}
Email: ${email}
Teléfono: ${phone}
`;

    const html = `
      <h3>Nuevo contacto</h3>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Empresa:</strong> ${company}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${phone}</li>
      </ul>
    `;

    await transporter.sendMail({
      from: `"Web Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject,
      text,
      html,
    });

    return res.status(200).json({ message: "Correo enviado." });
  } catch (err) {
    console.error("send-contact error:", err);
    return res.status(500).json({ message: "Error enviando correo." });
  }
}

// si prefieres usar 'service: "gmail"' en lugar de host/port
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });
