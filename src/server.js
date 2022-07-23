// import dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


// starting express.Js
const server = express()


server

// using req's body
    .use(express.urlencoded({extended: true}))


// using static files
    .use(express.static('public'))


// setting engine template
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')


// create routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


// start server
server.listen(5500)