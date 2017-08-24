const express = require('express')
const router = express.Router()
const showLogin = require('./handlers/showLogin')
const showLogout = require('./handlers/showLogout')
const showRegister = require('./handlers/showRegister')

router.get('/logout', showLogout)
router.get('/login', showLogin)
router.get('/register', showRegister)

module.exports = router
