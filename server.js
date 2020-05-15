const express = require("express");
const app = express();

const PORT = 4000;

app.get("/api/stuff", (req, res) => {
  res.json({
    stuff: "Here is some stuff. Yo!!!",
  });
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log("The server be working.");
});
