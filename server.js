const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const app = express();
const fs = require('fs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/brentvossler', (err)=>{
   // check if there is an error connecting
    if(err){
       console.log("Error: ", err);
    } else {
       console.log("Successfully connected to database!");
    }
 });

PORT = process.env.PORT || 3000;

// routes
routes(app);

app.listen(PORT, function(err) { 
	if(err) {
		console.log("server error", err);
		process.exit(1);
	};
	console.log("server is listening to port " + PORT);
});