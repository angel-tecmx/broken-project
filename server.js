const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Broken API endpoint (intentional error)
app.get("/api/users", (req, res) => {
  setTimeout(() => {
    res.status(500).json({ error: "Internal Server Error" });
  }, 2000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
