export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://api.conexahub.io/v1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer PASTE_YOUR_CONEXA_TOKEN_HERE"
      },
      body: JSON.stringify(req.body)
    });

    const result = await response.text();
    return res.status(response.status).send(result);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

