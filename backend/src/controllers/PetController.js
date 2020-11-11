const Pet = require('../models/Pet')

module.exports = {
    async store (req, res) {
        const pet = await Pet.create(req.body)
        
        return res.json(pet)
    }
}