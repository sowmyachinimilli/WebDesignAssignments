//modules
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

//set port
var port = process.env.PORT || 8080;

//connect to our mongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/app",{ useNewUrlParser: true});
//mongoose.connect("mongodb+srv://admin:admin@cluster0.ltjhloi.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true});

//get app data/ stuff of the body (POST request) parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json( {type: "application/vnd.api+json"} ));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//override with X-HTTP-Method-Override 
app.use(methodOverride("X-HTTP-Method-Override"));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname+"/public"));

//routes
require("./app/routes")(app); //configure our routes

//start app
//startup our app at http://localhost:8080
app.listen(port);

console.log("App started at port "+port);

exports = module.exports = app;