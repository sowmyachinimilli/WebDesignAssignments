var mongoose = require("mongoose");

module.exports = mongoose.model("Usersdb",{
    fullname: {type:String, default:" "},
    email: {type:String, default:""},
    password: {type:String, default:""}
});

