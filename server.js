const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json("This is home route");
});

app.listen(8080, (req, res) => {
  console.log("Server is running on port 8080");
});
