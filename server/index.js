require("dotenv").config();
const express = require("express");
const dbConnection = require("../db/connect");
const userRoutes = require("../routes/UserRoutes");
const userController = require("../controllers/UserController");

const app = express();
app.use(express.json());
dbConnection();

// ENDPOINT - REGISTER
app.use("/api/users", userRoutes);

// SERVER
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Up and Running on Port:", port);
});
