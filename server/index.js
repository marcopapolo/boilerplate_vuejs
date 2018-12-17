const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const buildPath = __dirname + "/../dist";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(buildPath));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/api", (req, res) => res.json({ status: "200" }));

app.get("*", (req, res) => res.sendFile(path.join(buildPath + "/index.html")));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("app listening on port: ", port));
