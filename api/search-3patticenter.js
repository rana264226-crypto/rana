// api/search-3patticenter.js

import fetch from "node-fetch";

export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({ error: "Number parameter missing" });
  }

  try {
    const response = await fetch(`https://www.3patticenter.com/famofc/api/database.php?num=${encodeURIComponent(num)}`);
    const data = await response.json();  // assume API returns JSON
    
    // Agar API response kuch aur format me ho, to parse accordingly
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching from 3patticenter API", details: err.message });
  }
}
