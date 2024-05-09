const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true,
  },
  gender:{
    //type:mongoose.Schema.Types. if i wanna know what types exist out there
    type : String,
    required:true,
  },
  age:{
    type : Number,
    required:true,
  },
  dateOfBirth:{
    type : String,
    required:true,
  },
  adress:{
    type : String,
    required:true,
  },
  siblings:{
    type : Number,
    required:true,
  },
  disabilities:{
    type : String,
    required:true,
  },
  allergies:{
    type : String,
    required:true,
  },
  illnesses:{
    type : String,
    required:true,
  },
  languageSpokenAtHome:{
    type : String,
    required:true,
  },
  hobies:{
    type : String,
    required:true,
  },
  other:{
    type : String,
    required:false,
  },
  emergencieFullName:{
    type : String,
    required:true,
  },
  emergenciePhoneNumber:{
    type : Number,
    required:true,
  },
  emergencieRelationToTheChild:{
    type : String,
    required:true,
  },
  pic:{
    type : String,
    required:true,
  },
  parentId:{
    type : String,
    required:true,
    
  }
});

const Child = mongoose.model("child",childSchema);
module.exports = Child;