const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generatePasswordHash = async (password) => {
  const saltRounds = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const comparePassword = async (password, enteredPassword) => {
  const passwordMatch = await bcrypt.compare(password, enteredPassword);
  return passwordMatch;
};

const generateJwtToken = async (userId) => {
  const payload = { userId };
  const secretKey = process.env.JWT_SECRET;

  const token = jwt.sign(payload, secretKey);
  return token;
};

module.exports = { generatePasswordHash, comparePassword, generateJwtToken };
