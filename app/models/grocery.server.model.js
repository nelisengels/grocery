'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Grocery Schema
 */
var GrocerySchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Grocery name',
		trim: true
	},
	quantity: {
		type: Number,
		default: 1,
		required: 'Please fill Grocery quantity'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Grocery', GrocerySchema);