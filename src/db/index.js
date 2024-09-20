const mongoose = require("mongoose")
const { db } = require('../config')
 async function connectDB() {
	try {
  	await mongoose.connect(db, { useUnifiedTopology: true }, {useNewUrlParser: true})
		console.log("Database connected");
    } catch (e) {
        console.error(`Database connection failed ${e}`)
    }
}

module.exports = connectDB