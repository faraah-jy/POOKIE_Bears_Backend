const mongoose = require("mongoose");

const notifSchema = new mongoose.Schema({
  msg:{
    type:String,
    required:true,
  },
  userIds:{
    //type:mongoose.Schema.Types. if i wanna know what types exist out there
    type: [mongoose.Schema.Types.ObjectId], 
    required:true,
  },
  
  createdAt:{
    type:Date,
    default: Date.now
  }
});

const Notif = mongoose.model("notification",notifSchema);
module.exports = Notif;