const mongoose = require("mongoose");
const { default: isEmail } = require("validator/lib/isEmail");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  user_name: {
    type: String,
    required: [true, "User name is required"],
    unique: [true, "User name must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email must be unique"],
    validate: [isEmail, "Valid Email is required"],
  },
  groups: [{ types: Schema.types.ObjectId, ref: "Group" }],
  friends: [{ type: Schema.types.ObjectId, ref: "User" }],
});

const User = model("User", userSchema);

module.exports = User;
