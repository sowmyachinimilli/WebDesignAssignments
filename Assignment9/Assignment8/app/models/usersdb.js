var mongoose = require("mongoose");

module.exports = mongoose.model("Usersdb",{
    fullname: 
    {   type:String, 
        default:" ",
        required: true,
        unique: false
    },
    email: {
        type:String, default:"",
        required: true,
        unique: true,
    },
    password: {
        type:String, 
        default:"",
        required: true,
        minLength: 8,
    }
});

