exports.messageNamespaceHandler = (namespace, io) => {
  namespace.on("connection", (socket) => {
    console.log(`Socket connected to ${namespace.name} namespace.`);
    console.log("socket id:", socket.id);

    console.log("socket.handshake :", socket.handshake.auth);

    socket.emit("send-message", "hi, how are you?");
  });

  namespace.on("disconnect", () => {
    console.log("Socket disconnected");
  });
};
