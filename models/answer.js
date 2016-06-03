var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AnswerSchema = new Schema({
	id: String,
	position: Number,
	text: String
});

module.exports = mongoose.model('Answer', AnswerSchema);