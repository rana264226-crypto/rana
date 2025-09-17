import fetch from "node-fetch";

export default async function handler(req, res) {
  const { phone } = req.query;

  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    const response = await fetch(`https://api.impossible-world.xyz/api/data?phone=${phone}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
}￼Enter
