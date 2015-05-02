var express = require('express');
var mongoose = require('mongoose');
var users = require('./routes/users');
var app = express();


mongoose.connect('mongodb://localhost/geoChallenge', function(err) {
	if (err) {
		console.log ('Connection error', err);		
	} 
	else {
		console.log ('Connection successful');
	}
});


app.use('/users', users);

module.exports = app;