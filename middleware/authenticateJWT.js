import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['x-api-token'];

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, process.env.APP_SIGNATURE, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

export default authenticateJWT;