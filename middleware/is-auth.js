const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const reqHeader = req.get("Authorization");
  if (!reqHeader) {
    const error = new Error("Not Authorized");
    error.status = 401;
    throw error;
  }
  const token = reqHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "somesecretkey");
    console.log(decodedToken, "m");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    const error = new Error("Not Authorized muz");
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodedToken.userId;
  next();
};
