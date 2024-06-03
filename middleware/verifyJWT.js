const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyJWT = (req, res, next) => {
    const token = req.cookies["jwt"];
    // console.log(token);
    if (!token) {
        return res.status(401).send("Access denied");
    }
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
        console.log(verified);
        next();
    } catch (err) {
        res.status(400).send("Invalid token");
    }
}

module.exports = verifyJWT