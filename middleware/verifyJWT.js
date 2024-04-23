const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyJWT = (req, res, next) => {
    const token = req.cookies['authorization'];
    if (!authHeader) return res.sendStatus(401);

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded.username;
            console.log(decoded.roles);
            req.roles = decoded.roles;
            next();
        }
    );
}

module.exports = verifyJWT