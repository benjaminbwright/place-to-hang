const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log("The server be working.");
});
