require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello!! This is deployed on AWS...");
});

app.listen(port, () => {
  console.log("Server listen on - ", port);
});
