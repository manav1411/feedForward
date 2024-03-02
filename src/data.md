// default state of the datastore

let data = {users: [], messages: [], foodProvider: [], foodReceiver: [] };

DataStore= {
	users: [{
		userID: number,
		name: string,
		pwd: string,    // pwds need to be hashed
		email: string,
		usertype: boolean,   // 1 for restaurant and 0 for charity
		storeAddress: string, // needs to be sent to the google API in order to work with map element
		averageRating: number
	}],

	messages: [{
		
	}],

	foodProvider: [{
		ingredients: ingredients[],  // contains a struct with ingredient name & expiry
		packageWeight: number,
		numPackages: number,
		openingHours: number[], // 2 ints open fron open to
		averageRating: number

	}],

	foodReceiver: [{
		peopleImpacted: number,
		useOfIngredients: string
	}]

}

