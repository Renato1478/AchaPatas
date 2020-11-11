const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/routes')

const app = express()

mongoose.connect('mongodb+srv://renato1478:RenatoP1478@cluster0.mz73r.mongodb.net/achaPatas?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3000)