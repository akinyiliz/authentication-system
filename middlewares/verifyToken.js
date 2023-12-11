const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const secretKey = process.env.JWT_SECRET;

  if (!req.headers.authorization) {
    res.status(401).json({ success: false, message: "Please send a Token" });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    jwt.verify(token, secretKey);

    next();
  } catch (error) {
    console.error("Error verifying jwt token:", error);
    res.status(401).json({ success: false, message: "Invalid Token." });
  }
};

module.exports = verifyToken;
