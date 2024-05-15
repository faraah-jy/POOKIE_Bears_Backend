const User = require("../model/user")

const getRegisterReq = async (req, res) => {
  try {
    console.log("uyguytu")
    const newUsers = await User.find({ registerAuth: false });
    console.log(newUsers)
    
    if (!newUsers || newUsers.length === 0) {
      return res.status(404).json({ msg: "No no new register requests." });
    }

    return res.status(200).json({newUsers});
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error." });
  }
}

const acceptUser = async (req, res) => {
  const id = req.params.id;
  const newUser = await User.findById(id);
  newUser.registerAuth = true;
  await newUser.save();
  return res
    .status(200)
    .json({ msg: `The user ${newUser.fullName} has been succesfully added as a parent !`, data: newUser });
};

const getAllUsers = async (req, res) => {
  try {

      const users = await User.find({role: "user" , registerAuth: true });
      console.log(users);

      return res.status(200).json({ msg: "all users", data: users });
  } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error." });
  }
  };







module.exports = {
  getRegisterReq,
  acceptUser,
  getAllUsers
}


