const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    RollNo:{
        type:Number,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Year:{
        type:String,
        required:true,
    },
    Domain:{
        type:String,
        required:true
    }
    
})


//collections

const Registration = new mongoose.model("Registration",studentSchema);

module.exports = Registration;