const express = require('express')
const router = express.Router()
const postRegister = require('./handlers/postRegister')
const postLogin = require('./handlers/postLogin')

router.post('/register', postRegister)
router.post('/login', postLogin)

module.exports = router
