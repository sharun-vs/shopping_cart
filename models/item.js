const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	brand: String,
	description: String,
	prize: {
		type: Number,
		required: true
	},
	seller: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Item', itemSchema);
