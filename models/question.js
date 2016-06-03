var mongoose     = require('mongoose');
var AnswerSchema = require('./answer');
var Schema       = mongoose.Schema;

var QuestionSchema = new Schema({
	id: String,
	correctAnswer: Number,
	text: String,
	number: Number,
	answers: [AnswerSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);