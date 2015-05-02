var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  facebook: String,
  foursquare: String,
  google: String,
  github: String,
  linkedin: String,
  live: String,
  yahoo: String,
  twitter: String,
  updated_at: {type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);