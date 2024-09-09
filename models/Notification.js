const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const notificationSchema = new Schema({
  receiver: {
    type: Schema.types.ObjectId,
    ref: "User",
  },

  content: {
    type: String,
    required: [true, "Notification content is required"],
  },
});

const Notification = model("Notification", notificationSchema);

module.exports = Notification;
