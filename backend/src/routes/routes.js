const { Router } = require('express')

const UserController = require('../controllers/UserController')
const PetController = require('../controllers/PetController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('coco')
})

// USERS
routes.post('/login', UserController.login)
routes.post('/signup', UserController.store)

routes.get('/my_pets', (req, res) => {
    res.json(req.headers)
})

routes.get('/my_favorites', (req, res) => {
    res.json(req.headers)
})

// PETS
routes.post('/pets', PetController.store)

routes.get('/pets', (req, res) => {
    res.json(req.query)
})

module.exports = routes