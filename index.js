const express = require("express");
const path = require("path");
const os = require("os");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// ✅ Serve static files (style.css, script.js, etc.)
app.use(express.static(path.join(__dirname, "client")));

// ✅ API route
app.get("/api/os/:method", (req, res) => {
  const method = req.params.method;

  if (typeof os[method] === "function") {
    res.json({ methodData: os[method]() });
  } else {
    res.status(400).json({ error: "Invalid method" });
  }
});

// ✅ Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
