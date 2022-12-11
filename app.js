const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
