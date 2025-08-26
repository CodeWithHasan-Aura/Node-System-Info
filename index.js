const express = require("express");
const path = require("path");
const os = require("os");


const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend correctly
app.use(express.static(path.join(__dirname, "frontend")));

// API route to send OS info
app.get("/api/os/:method", (req, res) => {
  const method = req.params.method;
  const data = {
    methodData: os[method](),
  };
  res.json(data);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
