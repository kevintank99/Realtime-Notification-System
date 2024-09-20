const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        username:{
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
        },

    },
    { timestamps: true, versionKey: false, collection: 'users' }
)
const UserModel = model('users',userSchema)
module.exports = UserModel