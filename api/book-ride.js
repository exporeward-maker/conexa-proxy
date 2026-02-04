export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  fetch("https://api.conexahub.io/v1/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_CONEXA_TOKEN_HERE"
    },
    body: JSON.stringify(req.body)
  })
    .then(r => r.text())
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
}


