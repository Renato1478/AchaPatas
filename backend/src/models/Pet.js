const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    type: String,
    name: String,
    gender: String,
    race: String,
    size: String,
    age: String,
    health: [String],
    characteristics: [String],
    description: String,
    profile_pic: String,
    owner: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    } 
})

module.exports = mongoose.model('Pet', PetSchema)