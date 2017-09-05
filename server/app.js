const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')
const moment = require('moment')
const passport = require('./config/passport/')
const cookieParser = require('cookie-parser')
const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const db = require(path.join(__base, '/config/db'))

// ROUTES
const viewRoutes = require(path.join(__base, '/routes/views/'))
const authRoutes = require(path.join(__base, '/routes/auth/'))
const privateRoutes = require(path.join(__base, '/routes/private/'))
const apiRoutes = require(path.join(__base, '/routes/api/'))

// SETTING LOCALS
app.locals.moment = moment

// CONFIG BODY-PARSER
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cookieParser())
app.use(session({ secret: 'supersecretworddonottelltoanyone',
  resave: false,
  saveUninitialized: true
// persist session to prevent reset from server
}))

app.use(passport.initialize())
app.use(passport.session())

// LOGGER
app.use(logger('dev'))

// CONFIG VIEWS
app.set('views', path.join(process.cwd(), './server/views'))
app.set('view engine', 'pug')

// FOLDER TO SERVE PUBLIC FILES
app.use(express.static(path.join(process.cwd(), './client')))
app.use(express.static(path.join(process.cwd(), './src')))

// ROUTES
app.use(viewRoutes)
app.use(authRoutes)
app.use(privateRoutes)
app.use(apiRoutes)

module.exports = app
