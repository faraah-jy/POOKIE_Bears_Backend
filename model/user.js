const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
  },
  password:{
    //type:mongoose.Schema.Types. //if i wanna know what types exist out there
    type : String,
    required:true,
  },
  fullName:{
    type : String,
    required:true,
  },
  role:{
    type : String,
    required:false,
    default:"user",
  },
  phoneNumber:{
    type : Number,
    required:true,
  },
  address:{
    type : String,
    required:true,
  },
  birthDate:{
    type : String,
    required:true,
  },
  profession:{
    type : String,
    required:true,
  },
  gender:{
    type : String,
    required:true,
  },
  persentChild:{
    type : Boolean,
    required:false,
  },
});

const User = mongoose.model("user",userSchema);
module.exports = User;