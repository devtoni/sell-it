const express = require('express')
const router = express.Router()
const getLogin = require('./handlers/getLogin')
const getLogout = require('./handlers/getLogout')
const getRegister = require('./handlers/getRegister')

router.get('/logout', getLogout)
router.get('/login', getLogin)
router.get('/register', getRegister)

module.exports = router
