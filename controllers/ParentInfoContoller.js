const User = require("../model/user");

const getMe = async (req, res) => {
  try {
    const userId = req.user.userId;
    const currentUser = await User.findById(userId);
    return res.status(200).json({ msg: "the current user", data: currentUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error." });
  }
};


const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const currentUser = await User.findById(userId);
    return res.status(200).json({ msg: "the parent", data: currentUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error." });
  }
};



module.exports = {
  getMe,
  getUser
}
