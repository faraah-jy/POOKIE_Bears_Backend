const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true,
  },
  experience:{
    //type:mongoose.Schema.Types. if i wanna know what types exist out there
    type : Number,
    required:true,
  },
  profession:{
    type:String,
    required:true,
  },
  exceptionsDealtWith:{
    type : String,
    required:true,
  },
  description:{
    type : String,
    required:true,
  },
  rating:{
    type : Number,
    required: false,
    default : 0
  }

});

const Employee = mongoose.model("employee",employeesSchema);
module.exports = Employee;