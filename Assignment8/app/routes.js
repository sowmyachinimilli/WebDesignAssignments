const bcrypt = require('bcrypt');
// app/routes.js
var Usersdb = require("./models/usersdb");

module.exports = function (app) {
    //Create user
  app.post("/user/create", async (req, res) => {
    try {
      var regexName = /^[a-zA-Z]+$/
      var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

      var fullname = req.body.fullname;
      var ipemail = req.body.email;
      var password = req.body.password;

      if(!fullname.trim().match(regexName)){
        res.status(400);
        res.json("message: Invalid name. Please enter a valid fullname");
      }
      else if(!ipemail.trim().match(regexEmail)){
        res.status(400);
        res.json("message: Invalid email address. Please enter a valid email");
      }
      else if(!password.trim().match(regexPassword)){
        res.status(400);
        res.json("message: Invalid password. Please enter a valid password");
      }
      else if (await Usersdb.findOne({ email: ipemail })) {
        res.status(400);
        res.json("message: email "+ ipemail + " is already registered, Please use a different email address!!");
      }
      else{
        req.body.password = await bcrypt.hash(req.body.password, 10);
        var rec = new Usersdb(req.body);
        const result = await rec.save();
        console.log(result);
        res.status(201);
        res.json("message: User has been added successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  });

  //Get All Users
  app.get("/user/getAll", async (req, res) => {
    try {
      const users = await Usersdb.find({}); //similar to select * from - in rdbms
      res.json(users);
      console.log(users);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

    //Get users by id
    app.get("/user/get/:id", async (req, res) => {
      try {
        const users = await Usersdb.findById(req.params.id); //similar to select * from - in rdbms
        res.json(users);
        console.log(users);
      } catch (err) {
        console.log(err);
        res.send(err);
      }
    });

  //Update a user
  app.put("/user/edit", async(req,res) => {
    let ipemail = req.query.email;
    let fullname = req.body.fullname;
    let password = req.body.password;
    try {
      if(req.body.email){
        res.status(400);
        res.json("{message: email address cannot be updated.}")
      }
      else{
      const users = await Usersdb.findOneAndUpdate({email: ipemail}, req.body);
      if(!users){
        console.log("User not found");
        res.send("User not found");
      }else{
        
      console.log("Updated user successfully");
      res.json("Updated user successfully");
      }
    }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })

  //Delete a user
  app.delete("/user/delete", async(req,res) => {
    try{
      let ipemail = req.query.email;
    const user = await Usersdb.findOneAndRemove({email:ipemail});
    if(!user){
      console.log("User not found");
      res.send("User not found");
    }
    else{
    console.log("User deleted successfully");
    res.send("User deleted successfully");
    }
  }catch(err){
    console.log(err);
    res.send(err);
  }
  });
};