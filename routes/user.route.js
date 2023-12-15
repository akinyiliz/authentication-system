const express = require("express");
const {
  login,
  register,
  getUsers,
  deleteUser,
  getUserDetails,
  updateUserDetails,
} = require("../controllers/user.controller");

const router = express.Router();

// ROUTE - REGISTER
router.post("/register", register);

// ROUTE - LOGIN
router.post("/login", login);

// ROUTE - GET ALL USERS
router.get("/", getUsers);

// ROUTE - GET USER DETAILS BY ID
router.get("/profile/:id", getUserDetails);

// ROUTE - UPDATE USER DETAILS
router.put("/profile/:id", updateUserDetails);

// ROUTE - DELETE USER
router.delete("/profile/:id", deleteUser);

module.exports = router;
