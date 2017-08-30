const express = require('express')
const router = express.Router()
const renderRegister = require('./handlers/renderRegister')

router.get('/register', renderRegister)

module.exports = router
