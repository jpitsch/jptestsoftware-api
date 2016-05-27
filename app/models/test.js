var mongoose     = require('mongoose');
var QuestionSchema = require('question');
var Schema       = mongoose.Schema;

var TestSchema = new Schema({
	id: Number
	name: String
	testType: String
	published: Boolean
	questions: [QuestionSchema]
});

module.exports = mongoose.model('Test', TestSchema);