const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const groupMessageSchema = new Schema({
  sender: {
    type: Schema.types.ObjectId,
    ref: "User",
  },

  content: {
    type: String,
    required: [true, "Message content is required"],
  },
});

const GroupMessage = model("GroupMessage", groupMessageSchema);

module.exports = GroupMessage;
