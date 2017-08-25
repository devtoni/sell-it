const express = require('express')
const router = express.Router()
const userProfile = require('./handlers/showProfile')
const userEditProfile = require('./handlers/editProfile')
const showChat = require('./handlers/showChat')

router.get('/profile', userProfile)
router.get('/edit-profile', userEditProfile)
router.get('/chat', showChat)
router.get('/user-id/profile', (req, res) => res.render('pages/user-id-profile', {idSection: 'profile'}))
router.get('/user-id/product-detail', (req, res) => res.render('pages/detail', {idSection: 'profile'}))
module.exports = router
