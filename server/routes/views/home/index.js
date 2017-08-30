const express = require('express')
const router = express.Router()
const getHome = require('./handlers/getHome')
const isAuthenticated = require('./middleware/isAuthenticated')
router.get('/', isAuthenticated, getHome)

module.exports = router
