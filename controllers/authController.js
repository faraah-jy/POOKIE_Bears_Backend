const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../model/user");
require('dotenv').config();

const handleLogin = async (req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd) return res.status(400).json({ 'message': 'email and password are required.'})
    const foundUser = await User.findOne({ email });
    if(!foundUser) return res.status(401).json({ 'message': 'User not found.' });
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    
    if (match) {
        if (foundUser.registerAuth){
        // create JWTs
        const accessToken = jwt.sign(
            { "email": foundUser.email ,"userId":foundUser._id, "roles": foundUser.role},
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
            res.cookie('jwt', accessToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({ accessToken });    
        } else {
            res.status(201).json({'message': `Sorry ${foundUser.fullName},your account creation hasn't been accepted yet, please check later on` });
        }
        
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };