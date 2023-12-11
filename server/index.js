require("dotenv").config();
const express = require("express");
const dbConnection = require("../db/connect");
const userRoutes = require("../routes/UserRoutes");

const app = express();
app.use(express.json());
dbConnection();

// ENDPOINT - REGISTER
app.use("/users", userRoutes);

// SERVER
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Up and Running on Port:", port);
});
