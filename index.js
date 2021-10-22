const express = require('express')
const mongoose = require('mongoose')
const ciudadRoutes = require('./routes/ciudad')
const app = express()
//
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/examen2', ciudadRoutes)


mongoose.connect('mongodb://user10:root@54.198.161.35:27017/base10?authSource=admin')
    .then(() =>{
        app.listen(8081, ()=> console.log('Server online.'))
    })
    .catch(err => console.log(err))

