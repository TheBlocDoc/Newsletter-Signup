const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const { urlencoded } = require("body-parser");
const port = 3000;

const app = express();
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
  console.log("Everything should be working at this point");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}...`);
});
