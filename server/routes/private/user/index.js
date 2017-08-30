const express = require('express')
const router = express.Router()
const getProfile = require('./handlers/getProfile')
const getChatPage = require('./handlers/getChatPage')
const getEditPage = require('./handlers/getEditPage')

router.get('/edit-profile', getEditPage)
router.get('/profile', getProfile)
router.get('/chat', getChatPage)

// router.get('/user-id/profile', (req, res) => res.render('pages/user-id-profile', {idSection: 'profile'}))
router.get('/product-detail', (req, res) => res.render('pages/detail', {idSection: 'profile'}))
module.exports = router
