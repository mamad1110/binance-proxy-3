import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/*", async (req, res) => {
  const target = "https://api.binance.com" + req.originalUrl;

  try {
    const response = await fetch(target);
    const data = await response.text();
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "Error fetching Binance API" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
