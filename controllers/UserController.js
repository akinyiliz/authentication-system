const jwt = require("jsonwebtoken");
const User = require("../models/users");
const authUtils = require("../utils/authUtils");

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

    const hashedPassword = await authUtils.generatePasswordHash(user.password);

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

// USER LOGIN
const login = async (req, res) => {
  const user = req.body;

  const secretKey = process.env.JWT_SECRET;

  try {
    const userExists = await User.findOne({
      $or: [{ username: user.username }, { email: user.email }],
    });

    if (!userExists) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    const passwordMatch = await authUtils.comparePassword(
      user.password,
      userExists.password
    );

    if (passwordMatch) {
      const token = jwt.sign({ userId: userExists._id }, secretKey);

      return res.status(200).json({
        success: true,
        message: "User login successfull.",
        token: token,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password." });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

//  GET ALL USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error getting users:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// GET USER DETAILS BY ID
const getUserDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res
        .status(404)
        .json({ succss: false, message: "User with the specified not found." });
    }

    return res
      .status(200)
      .json({ success: true, message: "User found.", user: user });
  } catch (error) {
    console.error("Error geting user details:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { register, login, getUsers, getUserDetails };
