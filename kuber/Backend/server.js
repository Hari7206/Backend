import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(morgan('dev'));  

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