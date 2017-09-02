const express = require('express')
const path = require('path')
const router = express.Router()
const passport = require(path.join(__base, 'config/passport'))

const getProfile = require('./user/getProfile')
const getChatPage = require('./user/getChatPage')
const getEditPage = require('./user/getEditPage')
const getAdmin = require('./admin/getAdmin')

router.use(passport.authenticate('jwt', { session: false }))
router.get('/edit-profile/', getEditPage)
router.get('/profile/', getProfile)
router.get('/chat', getChatPage)
router.get('/admin/', getAdmin)

module.exports = router
