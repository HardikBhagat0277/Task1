const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js CI/CD Pipeline Demo!");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Service is healthy" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
