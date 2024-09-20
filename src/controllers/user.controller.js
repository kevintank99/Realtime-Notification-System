const {userServices} = require('../services')
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
	try {
		const {username, password} = req.body
		if (!username || !password) {
			res.status(404).json({error: "Username or Password missing"})
		}
		const isUser = await userServices.checkUserExists(username)
		if (isUser) {
				res.status(409).json({ error: 'Username already exists' });
		} else {
			const isUserSaved = await userServices.createUser(username,password)
			if (isUserSaved) {
				res.status(200).json({message: "User created successfully"})
			} else {
				res.status(400).json({message: "User not created"})
			}
		
		}
	} catch(error) {
		console.error("Error while user registering", error)
		res.json({
				error
		})
	}
}

const loginUser = async(req, res) => {
	const { username, password } = req.body;
	try {
		const user = await userServices.checkUserExists(username)
		if (!user) {
				return res.status(404).json({ error: 'User not found' });
		}
		const isMatch = bcrypt.compare(password, user.password);
		if (!isMatch) {
				return res.status(401).json({ error: 'Invalid credentials' });
		}
		const token = userServices.generateToken(user);
		res.json({ token });
	} catch (err) {
		console.error("Got a error while login a user", error);		
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
    registerUser,
		loginUser
}