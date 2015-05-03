/// <reference path="../typings/node/node.d.ts"/>
// Third-party libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Local
var users = require('./routes/users');
var config = require('./config');
var User = require('./models/User');
var auth = require('./auth');
 
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


app.use('/users', users);

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
app.get('/api/me', auth.ensure, function(req, res) {
  User.findById(req.user, function(err, user) {
    console.log(err);
    res.send(user);
  });
});

/*
 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 */
app.put('/api/me', auth.ensure, function(req, res) {
  User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save(function(err) {
      res.status(200).end();
    });
  });
});

auth.auth(app);

module.exports = app;