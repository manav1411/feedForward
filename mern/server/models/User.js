const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
	businessName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	userType: {
		type: Boolean,
		required: true
	},
	storeAddress: {
		type: String,
		required: true
	},
	averageRating: {
		type:  Number,
		default: 1
	}
})

module.exports = mongoose.model("User", userSchema)