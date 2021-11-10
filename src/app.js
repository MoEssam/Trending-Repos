const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.get("/", function (req, res) {
  res.send("Hello Gemography");
});

app.listen(port, () => {
  console.log("Server is up and running on http://localhost:" + port);
});
