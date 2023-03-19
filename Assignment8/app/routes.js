// app/routes.js
var Usersdb = require("./models/usersdb");

module.exports = function (app) {
    //Create user
  app.post("/user/create", async (req, res) => {
    try {
      var rec = new Usersdb(req.body);
      const result = await rec.save();
      console.log(result);
      res.send(result);
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
  app.put("/user/edit/:id", async(req,res) => {
    const id = req.params.id;
    try {
      const users = await Usersdb.findByIdAndUpdate(id, req.body);
      if(!users){
        console.log("User not found");
        res.send("User not found");
      }else{
      console.log("Updated user successfully");
      res.send("Updated user successfully");
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })

  //Delete a user
  app.delete("/user/delete/:id", async(req,res) => {
    try{
    const user = await Usersdb.findByIdAndDelete(req.params.id);
    if(!user){
      console.log("User not found");
      res.send("User not found");
    }
    console.log("User deleted successfully");
    res.send("User deleted successfully");
  }catch(err){
    console.log(err);
    res.send(err);
  }
  });
};