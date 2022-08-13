const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {

  const method = req.method.toLowerCase();
  const authList = req.swagger && req.swagger.path[method] && req.swagger.path[method]['x-swagger-auth'];
  console.log('auth validation', authList)
  return next()
  
  const token = req.header("x-access-token");
  if (!token){
    console.log(`Request to API name${req.path} failed no token is sent`)
    return res.status(401).json({
      status: 401,
      message: "Access denied. No token provided."
    });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    console.log(`Request to API name - ${req.path} ${req.user.email}`)
    next();
  } catch (ex) {
    console.log(`Request to API name${req.path} failed no token is Invalid`)
    // logger.error(`Request to API name${req.path} failed no token is Invalid`);
    return res.status(401).json({
      status: 401,
      message: "Invalid token."
    });
  }
};
