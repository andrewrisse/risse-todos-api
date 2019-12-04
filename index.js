require('dotenv').config();
var express = require("express"),
	mongoose = require("mongoose"),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views")); //allows us to serve index.html in the views directory

app.get("/", function(req, res){
	res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(port, function(){
	console.log("App is running");
})