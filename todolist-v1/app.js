//jshint esversion:6


const express = require("express");
const bodyParser = require("bodyParser");

const app = express();

app.get("/", function(req, res)) {
res.send("hello");
});



app.listen(3000, function() {
	console.log("Server started on port 3000");
});