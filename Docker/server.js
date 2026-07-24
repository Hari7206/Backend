import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/load", (req, res) => {
  res.send("I AM WORKING");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Hari" },
    { id: 2, name: "John" }
  ]);
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});