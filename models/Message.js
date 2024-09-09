const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const messageSchema = new Schema({
  sender: {
    type: Schema.types.ObjectId,
    ref: "User",
  },

  receiver: {
    type: Schema.types.ObjectId,
    ref: "User",
  },

  content: {
    type: String,
    required: [true, "Message content is required"],
  },
});

const Message = model("Message", messageSchema);

module.exports = Message;
