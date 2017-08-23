const express = require('express')
const router = express.Router()
const userProfile = require('./handlers/showProfile')
const userEditProfile = require('./handlers/editProfile')
const showChat = require('./handlers/showChat')

router.get('/profile', userProfile)
router.get('/edit-profile', userEditProfile)
router.get('/chat', showChat)

module.exports = router
