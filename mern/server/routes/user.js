import express from 'express';
//const User = require('')
const router = express.Router()

// POST user details
router.post('/', (req, res) => {
	const { businessName, password, email, userType, storeAddress, averageRating } = req.body
	res.json({mssg: 'POST a new user'})
})

// GET a single restaurant's details
router.get('/:id', (req, res) => {
	const {  } = req.body	
	res.json({mssg: 'GET a particular restaurant'})
})


export default router;