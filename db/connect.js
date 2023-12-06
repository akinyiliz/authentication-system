require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnection() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB Connected Successfully.");
  } catch (error) {
    console.error("Error Connecting to DB", error);
  }
}

module.exports = dbConnection;
