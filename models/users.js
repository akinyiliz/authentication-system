const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required."] },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
