const express = require('express')
const router = express.Router()

const updateUser = require('./handlers/updateUser')

router.put('/api/user/:id', updateUser)

module.exports = router
