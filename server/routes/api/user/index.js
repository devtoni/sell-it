const express = require('express')
const router = express.Router()
const updateProfile = require('./handlers/updateProfile')

router.put('/api/user/edit/', updateProfile)

module.exports = router
