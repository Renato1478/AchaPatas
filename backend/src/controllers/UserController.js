const User = require('../models/User')

module.exports = {
    async store (req, res) {
        const { email, password, name, last_name, phone, profile_pic } = req.body

        const user = await User.create({
            email,
            password, 
            name, 
            last_name, 
            phone, 
            profile_pic
        })

        return res.json(user)
    },

    login (req, res) {
        return res.json(req.body)
    }
}