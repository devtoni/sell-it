const express = require('express')
const path = require('path')
const router = express.Router()

const showProfile = require('./user/showProfile')
const showContactForm = require('./user/showContactForm')
const showEditProfile = require('./user/showEditProfile')
const isAuthenticated = require(path.join(__base, '/routes/auth/handlers/middleware/isAuthenticated'))

router.get('/edit-profile/', isAuthenticated, showEditProfile)
router.get('/profile/:id', isAuthenticated, showProfile)
router.get('/contact/:id', isAuthenticated, showContactForm)

module.exports = router
