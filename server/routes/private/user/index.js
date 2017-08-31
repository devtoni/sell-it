const express = require('express')
const path = require('path')
const router = express.Router()
const passport = require(path.join(__base, 'config/passport'))

const getProfile = require('./handlers/getProfile')
const getChatPage = require('./handlers/getChatPage')
const getEditPage = require('./handlers/getEditPage')

router.use(passport.authenticate('jwt', { session: false }))
router.get('/edit-profile/:id', getEditPage)
router.get('/profile/:id', getProfile)
router.get('/chat', getChatPage)

module.exports = router
