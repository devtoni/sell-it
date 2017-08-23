const express = require('express')
const router = express.Router()
const showLogin = require('./handlers/showLogin')
const showRegister = require('./handlers/showRegister')

router.get('/login', showLogin)
router.get('/register', showRegister)

module.exports = router
