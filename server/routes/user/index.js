const express = require('express')
const router = express.Router()
const userProfile = require('./handlers/showProfile')
const userEditProfile = require('./handlers/editProfile')

router.get('/:user/profile', userProfile)
router.get('./:user/edit-profile', userEditProfile)

module.exports = router
