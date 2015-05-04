var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	name: String,
	question: String,
	answer: String
});

module.exports = mongoose.model('Post', PostSchema);
