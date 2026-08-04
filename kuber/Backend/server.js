import express from "express";

const app = express();
const PORT = 3000;

// GET route
app.get("/api/hello", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello, World!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});