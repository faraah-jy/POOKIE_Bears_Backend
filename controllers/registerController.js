const User = require("../model/user");
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    try{
        const { email, pwd , fullName, phoneNumber, address, birthDate, profession, gender} = req.body;
        if (!email || !pwd || !fullName|| !phoneNumber|| !address|| !birthDate|| !profession|| !gender ) return res.status(400).json({ 'message': 'You have not inserrted one input' });
        // check for duplicate usernames in the db
        const duplicateUser = await User.findOne({email : email})
        //const duplicate = usersDB.users.find(person => person.username === user);
        if (duplicateUser) return res.status(409).json({ 'message': 'User already exists.' }); //Conflict

        try {
            //encrypt the password
            const hashedPwd = await bcrypt.hash(pwd, 10);
            //store the new user
            const newUserData = { 
                "email": email, 
                "password": hashedPwd  , 
                "fullName":fullName, 
                "role": 'user', 
                "phoneNumber":phoneNumber , 
                "address": address, 
                "birthDate":birthDate, 
                "profession":profession, 
                "gender":gender};
    
            const newUser = await User.create(newUserData);
    
            res.status(201).json({ 'success': `New user ${newUserData.fullName} created! Please wait for your account to be accepted` });
        } catch (err) {
            res.status(500).json({ 'message': err.message });
        }
    
    }catch(err){
        console.log(err);
    }
}

module.exports = { handleNewUser };
