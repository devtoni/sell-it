const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const projection = require('./routes/api/middleware/projection')
const routeHome = require('./routes/home/')
const routesAuth = require('./routes/auth/')
const routesUser = require('./routes/user/')
const routesProducts = require('./routes/products/')
const routesProduct = require('./routes/product/')
const routesAdmin = require('./routes/admin')
const routesApiProducts = require('./routes/api/products')
const routesApiProduct = require('./routes/api/product')

// CONFIG BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CONFIG VIEWS
app.set('views', path.join(process.cwd(), './server/views'))
app.set('view engine', 'pug')

// FOLDER TO SERVE PUBLIC FILES
app.use(express.static(path.join(process.cwd(), './client')))
app.use(express.static(path.join(process.cwd(), './src')))

// ROUTES
app.use(projection)
app.use(routeHome)
app.use(routesAuth)
app.use(routesUser)
app.use(routesProducts)
app.use(routesProduct)
app.use(routesAdmin)
app.use(routesApiProducts)
app.use(routesApiProduct)

module.exports = app
