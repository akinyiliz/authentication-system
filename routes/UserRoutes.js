const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const userController = require("../controllers/UserController");

const router = express.Router();

// ROUTE - REGISTER
router.post("/register", userController.register);

// ROUTE - LOGIN
router.post("/login", userController.login);

// ROUTE - GET ALL USERS
router.get("/", userController.getUsers);

// ROUTE - GET USER DETAILS BY ID
router.get("/profile/:id", userController.getUserDetails);

// ROUTE - PROTECTED ROUTE
router.get("/protected-route", verifyToken, (req, res) => {
  res.json({ message: "This is  a protected route" });
});

module.exports = router;
