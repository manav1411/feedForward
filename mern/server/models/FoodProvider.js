const mongoose = require("mongoose")


const ingredientsSchema = new mongoose.Schema ({
	foodName: [{
		type: String,
		required: true
	}],
	expiryDate: [{
		type: Date,
		required: true
	}]
})

const foodProviderSchema = new mongoose.Schema ({
	ingredients: [{
		type: ingredientsSchema,
		required: true
	}],
	packageWeight: {
		type: Number,
		required: true
	},
	numPackages: {
		type: Number,
		required: true
	},
	openingHours: {
		type: Number,
		required: true
	},
	averageRating: {
		type:  Number,
		default: 1
	}
})

module.exports = mongoose.model("FoodProvider", foodProviderSchema)