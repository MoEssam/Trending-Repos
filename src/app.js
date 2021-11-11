const express = require("express");
const repos = require("./routes/repos");
require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello Gemography");
});

app.use(repos);

app.listen(port, () => {
  console.log("Server is up and running on http://localhost:" + port);
});
