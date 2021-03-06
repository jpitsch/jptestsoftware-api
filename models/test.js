var mongoose     = require('mongoose');
var QuestionSchema = require('./question').schema;
var Schema       = mongoose.Schema;

var TestSchema = new Schema({
	//_id: Schema.Types.ObjectId,
	name: String,
	type: String,
	published: { type: Boolean, default: false},
	questions: [QuestionSchema]
});

module.exports = mongoose.model('Test', TestSchema);