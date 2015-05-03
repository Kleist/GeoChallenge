/// <reference path="../typings/node/node.d.ts"/>
// Third-party libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Local
var config = require('./config');
var auth = require('./auth');
var api = require('./api');
 
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var frontendDir = __dirname + '/../frontend';
console.log('frontentDir: ' + frontendDir);
app.use('/',express.static(frontendDir));

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function() {
  console.log ('Connection error, make sure MongoDB is running');		
});

app.use('/api', api);

auth.auth(app);

module.exports = app;