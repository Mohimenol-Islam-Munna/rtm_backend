exports.messageNamespaceHandler = (namespace, io) => {
  namespace.on("connection", async (socket) => {
    // console.log(`Socket connected to ${namespace.name} namespace.`);
    // console.log("socket id:", socket.id);
    // console.log("socket rooms:", socket.rooms);
    // console.log("socket.handshake :", socket.handshake.auth);

    // socket.on("join-room", (roomName) => {
    //   console.log("room name: ", roomName);
    //   namespace.socketsJoin(roomName);
    //   // socket.join(roomName);

    //   console.log("socket id:", socket.id);

    //   socket
    //     .to(roomName)
    //     .emit(
    //       "not_for_all_go",
    //       `${socket.id} joined in the ${roomName}  and say hello`
    //     );
    // });

    // socket.on("not_for_all1", (data) => {
    //   console.log("not_for_all1 received: ", data);
    //   namespace.emit("not_for_all1", data + " " + "also from server");
    // });

    // console.log("namespace clients", namespace.sockets.size);

    socket.emit("welcome", "Welcome to message namespace");

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  });
};
