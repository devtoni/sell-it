const express = require('express')
const app = express()
const path = require('path')
const routeHome = require('./routes/home/')
const routesAuth = require('./routes/auth/')
const routesUser = require('./routes/user/')
const routesProducts = require('./routes/products/')
const routesProduct = require('./routes/product/')
// CONFIG VIEWS
app.set('views', path.join(process.cwd(), './server/views'))
app.set('view engine', 'pug')

// FOLDER TO SERVE PUBLIC FILES
app.use(express.static(path.join(process.cwd(), './client')))

// ROUTES
app.use(routeHome)
app.use(routesAuth)
app.use(routesUser)
app.use(routesProducts)
app.use(routesProduct)

module.exports = app
