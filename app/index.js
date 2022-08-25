const express = require("express");
const path = require("path");
const pug = require("pug");

const app = express();
app.use(express.static("public"));
app.engine("html", pug.renderFile);
app.set("view engine", "pug");

const PORT = 8080;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.render(path.join(__dirname + "/index.pug"));
});

app.get("/success", (req, res) => {
  res.send("Hello World Success!");
});

app.listen(PORT, HOST, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log(`Testing NGINX Reverse Proxy: http://localhost:80`);
});
