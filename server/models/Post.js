var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Post', PostSchema);
