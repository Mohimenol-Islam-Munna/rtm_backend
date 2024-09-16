const express = require("express");
const http = require("http");

const { Server } = require("socket.io");
const { messageNamespaceHandler } = require("./messageNamespace");
const { notificationNamespaceHandler } = require("./notificationNamespace");
const { groupNamespaceHandler } = require("./groupNamespace");

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  path: `RTM_BACKEND`,
});

const messageNamespace = io.of(`/message`);
const notificationNamespace = io.of(`/notification`);
const groupNamespace = io.of(`/group`);

messageNamespaceHandler(messageNamespace, io);
notificationNamespaceHandler(notificationNamespace, io);
groupNamespaceHandler(groupNamespace, io);

module.exports.io = io;
module.exports.app = app;
module.exports.httpServer = httpServer;
