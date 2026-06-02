import { buildCsrfCookie, createCsrfToken } from "./_utils/csrf";

export default function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const csrfToken = createCsrfToken();
  res.setHeader("Set-Cookie", buildCsrfCookie(csrfToken));
  res.status(200).json({ csrfToken });
}
