export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  fetch("https://api.conexahub.io/v1/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer pit-7b79f72e-e6f8-427f-b288-8ecb6c22fc4a"
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


