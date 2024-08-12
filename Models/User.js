//User.js

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userId: String,
    password: String,
    loginStatus: Boolean,
    registerDate: Date,

    
    
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel