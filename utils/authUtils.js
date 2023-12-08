const bcrypt = require("bcryptjs");

const generatePasswordHash = async (password) => {
  const saltRounds = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const comparePassword = async (password, enteredPassword) => {
  const passwordMatch = await bcrypt.compare(password, enteredPassword);
  return passwordMatch;
};

module.exports = { generatePasswordHash, comparePassword };
