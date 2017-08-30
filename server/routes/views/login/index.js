const express = require('express')
const router = express.Router()
const getLogin = require('./handlers/getLogin')

router.get('/login', getLogin)

module.exports = router
