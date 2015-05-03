/// <reference path="../typings/node/node.d.ts"/>
// Third-party libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var passport = require('passport');
var PassportLocalStrategy = require('passport-local').Strategy;
var path = require('path');

// Local
var users = require('./routes/users');
var config = require('./config');
var User = require('./models/User');
 
passport.use(new PassportLocalStrategy(
  function(username, password, done) {
    if (username=='admin' && password == 'admin') {
      return done(null, {name: 'admin'});
    } 
    return done(null, false, {message: 'Incorrect credentials'});
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.name);
});

passport.deserializeUser(function(id, done) {
  done(null, {name: id});
});

var auth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.send(401);
  }
  else {
    next();
  }
}

// Start express application
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use('/', express.static(path.join(__dirname, '../frontend')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.use(passport.initialize()); // Add passport initialization

app.get('/users', auth, function(req, res){
  res.send([{name: "user1"}, {name: "user2"}]);
});

app.get('/users', auth, function(req, res) {
  res.send(['user1', 'user2']);
});

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function() {
  console.log ('Connection error, make sure MongoDB is running');		
});
//==================================================================
// route to test if the user is logged in or not
app.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

// route to log in
app.post('/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user);
});

// route to log out
app.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});

function errorHandler(err, req, res, next) {
  console.log(err.stack);
  if (req.xhr) {
    res.status(500).send({error: 'Something blew up!'});
  }
  else {
    res.status(500);
    res.render('error', { error: err });
  }
}
app.use(errorHandler);

module.exports = app;