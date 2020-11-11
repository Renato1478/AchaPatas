const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    last_name: String,
    phone: String,
    profile_pic: String
})

module.exports = mongoose.model('User', UserSchema)