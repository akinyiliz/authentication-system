const express = require("express");
const userController = require("../controllers/UserController");

const router = express.Router();

// ROUTE - REGISTER
router.post("/register", userController.register);

// ROUTE - LOGIN
router.post("/login", userController.login);

// ROUTE - GET ALL USERS
router.get("/", userController.getUsers);

// ROUTE - GET USER DETAILS BY ID
router.get("/:id", userController.getUserDetails);

module.exports = router;
