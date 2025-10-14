const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const reqHeader = req.get("Authorization");
  if (!reqHeader) {
    req.isAuth = false;
    return next();
  }
  const token = reqHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "somesecretkey");
    console.log(decodedToken, "m");
  } catch (err) {
   req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};
