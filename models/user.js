const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	sellingItems: [
	{
		type: Schema.Types.ObjectId,
		ref: 'Item'
	}]
});

module.exports = mongoose.model('User', userSchema)