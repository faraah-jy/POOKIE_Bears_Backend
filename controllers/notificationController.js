const Notif = require("../model/notif")
const User = require("../model/user")




const sendNotif = async (req, res) => {
  try {
    const msg = req.body.msg;
    if (!msg) {
      return res.status(400).json({ msg: "Missing message" });
    }

    const users = await User.find({ persentChild: true });
    if (users.length === 0) {
      return res.status(404).json({ msg: "No users with presentChild found" });
    }

    const userIds = users.map(user => user._id); // Get an array of user IDs
    const newNotifData = { msg, userIds };

    const newNotif = await Notif.create(newNotifData);

    return res.status(200).json({ msg: "Notification has been stored successfully!", data: newNotifData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error" });
  }
};






const getNotif = async (req, res) => {
  try {
    console.log("test")
    const userId = req.user.userId; 
    const notifications = await Notif.find({ userIds: { $in: [userId] } });
    
    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ msg: "No notifications found for the user." });
    }

    return res.status(200).json({notifications});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error." });
  }
}

module.exports = {
  sendNotif,
  getNotif,
}