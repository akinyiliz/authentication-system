require("dotenv").config();
const express = require("express");
const dbConnection = require("../db/connect");
const UserRoutes = require("../routes/user.route");

const app = express();
app.use(express.json());
dbConnection();

// ROUTES from User routes file
app.use("/api/users", UserRoutes);

// SERVER
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Up and Running on Port:", port);
});
