const express = require("express");
const app = express();

app.get("/api/search", (req, res) => {
  const { phone } = req.query;

  if (!phone) {
    return res.json({ records: [] });
  }

  const dummyData = [
    { Name: "Ali Khan", Mobile: "03001234567", Country: "Pakistan", CNIC: "12345-6789012-3", Address: "Karachi" },
    { Name: "Ahmed Raza", Mobile: "03019876543", Country: "Pakistan", CNIC: "98765-4321098-7", Address: "Lahore" }
  ];

  const results = dummyData.filter(r => r.Mobile.includes(phone));
  res.json({ records: results });
});

module.exports = app;
