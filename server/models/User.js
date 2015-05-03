var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  facebook: String,
  updated_at: {type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);