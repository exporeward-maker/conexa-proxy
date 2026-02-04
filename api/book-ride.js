export default async function handler(req, res) {
  // ✅ CORS HEADERS (CRITICAL)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ HANDLE PREFLIGHT
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ❌ BLOCK NON-POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://api.conexahub.io/v1/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.CONEXA_TOKEN}`
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.text();

    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).json({
      error: "Proxy failed",
      details: err.message
    });
  }
}
