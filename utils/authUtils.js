const bcrypt = require("bcryptjs");

const generatePasswordHash = async (password) => {
  const saltRounds = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

module.exports = { generatePasswordHash };
