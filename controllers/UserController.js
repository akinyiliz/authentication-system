const bcrypt = require("bcryptjs");
const User = require("../models/users");

// REGISTER A USER
const register = async (req, res) => {
  const user = req.body;

  try {
    const checkEmailExists = await User.findOne({ email: user.email });
    if (checkEmailExists) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    const checkUsernameExists = await User.findOne({ username: user.username });
    if (checkUsernameExists) {
      return res.status(409).json({
        success: false,
        message: "User with this username already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;

    const newUser = await User.create(user);

    if (!newUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Registration Failed." });
    }

    return res.status(201).json({
      success: true,
      message: "User Registration Successfull.",
    });
  } catch (error) {
    console.error("Error registering a user.", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { register };
