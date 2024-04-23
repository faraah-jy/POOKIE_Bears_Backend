const User = require("../model/user");

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
    try{
            const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({refreshToken : refreshToken})
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.email !== decoded.email) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "email": decoded.email , "roles": decoded.roles },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '60s' }
            );
            res.json({ accessToken })
        }
    );

    }catch(err){
        console.log(err);
    }
}

module.exports = { handleRefreshToken }