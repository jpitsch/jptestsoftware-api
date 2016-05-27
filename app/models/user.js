var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	userName: String,
	password: String,
	created: Date,
	updated: Date,
	email: String
});

module.exports = mongoose.model('User', UserSchema);