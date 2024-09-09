const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");
const { messageNamespaceHandler } = require("./socket/messageNamespace");
const {
  notificationNamespaceHandler,
} = require("./socket/notificationNamespace");
const { groupNamespaceHandler } = require("./socket/groupNamespace");
const rtmRouter = require("./routes/router");

const app = express();

// .env file configuration
dotenv.config();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors policy
const corsOptions = {
  origin: `http://localhost:${process.env.PORT}`,
};

app.use(cors(corsOptions));

const httpServer = http.createServer(app);

console.log("path :", process.env.SOCKET_IO_PATH);

const io = new Server(httpServer, {
  path: `${process.env.SOCKET_IO_PATH}`,
});

const messageNamespace = io.of(`/message`);
const notificationNamespace = io.of(`/notification`);
const groupNamespace = io.of(`/group`);

messageNamespaceHandler(messageNamespace, io);
notificationNamespaceHandler(notificationNamespace, io);
groupNamespaceHandler(groupNamespace, io);

// application routes
const router = express.Router();

// route prefix
app.use("/api/v1", router);
router.use("/rtm", rtmRouter);

// ALL :: page not found
app.all("*", (req, res) => {
  res.json("page not found");
});

httpServer.listen(process.env.PORT, () => {
  console.log(`your server is running at port ${process.env.PORT} ...`);
});

// database connection
// mongoose
//   .connect(process.env.DATABASE_URL)
//   .then((res) => {
//     console.log("data base connection successful!");

//     // start server
//     httpServer.listen(process.env.PORT, () => {
//       console.log(`your server is running at port ${process.env.PORT} ...`);
//     });
//   })
//   .catch((err) => {
//     console.log("Database connection failed");
//   });
