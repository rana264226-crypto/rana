import fetch from "node-fetch";

export default async function handler(req, res) {
  const { phone } = req.query;

  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    const apiRes = await fetch(`https://api.impossible-world.xyz/api/data?phone=${phone}`);
    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
