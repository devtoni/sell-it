const express = require('express')
const router = express.Router()
const userProfile = require('./handlers/showProfile')
const userEditProfile = require('./handlers/editProfile')

router.get('/profile', userProfile)
router.get('/edit-profile', userEditProfile)

module.exports = router
