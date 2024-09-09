const express = require("express");
const {
  getMessageList,
  createMessage,
  getGroupMessageList,
  createGroupMessage,
} = require("../controllers/messageController");
const {
  getNotificationList,
  createNotification,
} = require("../controllers/notificationController");
const { getGroupList, createGroup } = require("../controllers/groupController");
const {
  getUserList,
  createUser,
  login,
  getFriendList,
} = require("../controllers/userController");

const rtmRouter = express.Router();

rtmRouter.route("/user").get(getUserList).post(createUser);
rtmRouter.route("/user/login").get(login);
rtmRouter.route("/user/friends").get(getFriendList);

rtmRouter.route("/message").get(getMessageList).post(createMessage);

rtmRouter.route("/group").get(getGroupList).post(createGroup);

rtmRouter
  .route("/group/message")
  .get(getGroupMessageList)
  .post(createGroupMessage);

rtmRouter
  .route("/notification")
  .get(getNotificationList)
  .post(createNotification);

module.exports = rtmRouter;
