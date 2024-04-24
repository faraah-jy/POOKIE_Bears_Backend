const User = require("../model/user");


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
    try{
        const { email, pwd } = req.body;
        if (!email || !pwd) return res.status(400).json({ 'message': 'Email and password are required.' });

        const foundUserData = await User.findOne({email});


        if (!foundUserData) return res.sendStatus(401); //Unauthorized
        //here's the line causing the issues



        // evaluate password 
        const match = await bcrypt.compare(pwd, foundUserData.password);
    
        if (match) {
            // create JWTs
            const accessToken = jwt.sign(
                { "email": foundUserData.email , "role": foundUserData.role},
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1d' }
            );

            res.cookie('jwt', accessToken, { httpOnly: true, sameSite: 'Strict', secure: true, maxAge: 24 * 60 * 60 * 1000 });
            return res.status(200).json(foundUserData);
        } else {
            res.sendStatus(401);
        }

    }catch(err){
        console.log(err);
    }
}

module.exports = { handleLogin };