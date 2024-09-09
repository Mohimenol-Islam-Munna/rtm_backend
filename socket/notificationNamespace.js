exports.notificationNamespaceHandler = (namespace, io) => {
  namespace.on("connection", (socket) => {
    console.log(`Socket connected to ${namespace.name} namespace.`);
    console.log("socket id:", socket.id);
  });

  namespace.on("disconnect", () => {
    console.log("Socket disconnected");
  });
};
