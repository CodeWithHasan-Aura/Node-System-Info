const express = require("express");
const path = require("path");
const os = require("os");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


// ✅ API route
app.get("/api/os/:method", (req, res) => {
  const method = req.params.method;

  if (typeof os[method] === "function") {
    res.json({ methodData: os[method]() });
  } else {
    res.status(400).json({ error: "Invalid method" });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
