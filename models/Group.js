const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const groupSchema = new Schema({
  name: {
    type: String,
    required: [true, "Group name is required"],
  },

  users: {
    type: Schema.types.ObjectId,
    ref: "User",
  },
});

const Group = model("Group", groupSchema);

module.exports = Group;
