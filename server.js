const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  path: "/custom-socket-io",
});

// Default/Main namespace connection
io.on("connection", (socket) => {
  console.log("------ Socket connected to main namespace -------");

  io.on("message", (data) => {
    console.log("Received message: ", data);
  });

  io.send(`Welcome Message From Socket Server.`);
});

// Admin namespace connection
io.of("/admin").on("connection", (socket) => {
  console.log(
    "------ Socket connected to admin namespace ------ :",
    socket.handshake.auth
  );
});

io.on("new_namespace", (namespace) => {
  console.log("New namespace connected :");
});

app.get("/", (req, res) => {
  return res.json("This is home route");
});

httpServer.listen(8080, (req, res) => {
  console.log("Server is running... on port 8080");
});
