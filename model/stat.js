const mongoose = require("mongoose");

const statSchema = new mongoose.Schema({
  visitor:{
    type:Number,
    required:false,
    default : 0
  },
  loggedVisitor:{
    //type:mongoose.Schema.Types. if i wanna know what types exist out there
    type: Number, 
    required:false,
    default : 0
  },
  loggedVisitorAndMore:{
    //type:mongoose.Schema.Types. if i wanna know what types exist out there
    type: Number, 
    required:false,
    default : 0
  },
  createdAt:{
    type:Date,
    default: Date.now
  }


  
});

const Stat = mongoose.model("stat",statSchema);
module.exports = Stat;