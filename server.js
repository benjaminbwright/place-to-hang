const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log("The server be working.");
});
