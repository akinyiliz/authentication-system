require("dotenv").config();
const express = require("express");
const dbConnection = require("../db/connect");
const userController = require("../controllers/UserController");

const app = express();
app.use(express.json());
dbConnection();

// ENDPOINT - REGISTER
app.post("/users/register", userController.register);

// ENDPOINT - LOGIN
app.post("/users/login", userController.login);

// ENDPOINT - GET ALL USERS
app.get("/users", userController.getUsers);

// ENDPOINT - GET USER DETAILS BY ID
app.get("/users/:id", userController.getUserDetails);

// SERVER
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Up and Running on Port:", port);
});
