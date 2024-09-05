const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  path: "/custom-socket-io",
});

io.on("connection", (socket) => {
  console.log("socket ::::: connected ::");

  socket.on("message", (data) => {
    console.log("Received message: ", data);
  });
});

app.get("/", (req, res) => {
  return res.json("This is home route");
});

httpServer.listen(8080, (req, res) => {
  console.log("Server is running... on port 8080");
});
