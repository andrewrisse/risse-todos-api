var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://andrewrisse:" + process.env.PASSWORD + "@mycluster-cqqgf.mongodb.net/test?retryWrites=true&w=majority", { 
	useNewUrlParser: true, 
	useUnifiedTopology: true  
}).then(() =>{
	console.log("Connected to the DB!");
}).catch(err => {
	console.log("ERROR: " + err.message);
});

//mongoose.Promise = Promise; // I don't think this is needed

module.exports.Todo = require("./todo");