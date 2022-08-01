// Getting the dotEnv file

require('dotenv').config()

// Express config

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Publics static folder

app.use(express.static(path.join(__dirname, 'public')))

// Setting views

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Setting routes

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/*', (req, res) => {
    res.redirect("/")
})

// Server config

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})