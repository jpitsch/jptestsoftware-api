var mongoose     = require('mongoose');
var AnswerSchema = require('./answer').schema;
var Schema       = mongoose.Schema;

var QuestionSchema = new Schema({
	correctAnswer: {type: Number, select: false },
	text: String,
	number: Number,
	answers: [AnswerSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);