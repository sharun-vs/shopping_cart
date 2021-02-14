const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'Item'
	}],
	total_prize: Number
});