const express = require('express')
const router = express.Router()
const getUsers = require('./handlers/getUsers')

router.get('/api/users', getUsers)

module.exports = router
