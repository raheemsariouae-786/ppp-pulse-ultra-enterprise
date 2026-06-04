const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "PPP Pulse Ultra Backend ✅" });
});

app.get("/api/status", (req, res) => {
  res.json({ status: "online", project: "PPP Pulse Ultra" });
});

app.get("/api/districts", (req, res) => {
  res.json({ districts: ["کراچی", "لاڑکانہ", "سکھر", "حیدرآباد"] });
});

app.listen(PORT, () => {
  console.log(`✅ Backend port ${PORT} پر چل رہا ہے`);
});
