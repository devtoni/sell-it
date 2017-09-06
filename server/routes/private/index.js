const express = require('express')
const path = require('path')
const router = express.Router()

const showProfile = require('./user/showProfile')
const showContactForm = require('./contact/showContactForm')
const contactForm = require('./contact/contactForm')
const showEditProfile = require('./user/showEditProfile')
const showMail = require('./mail/showMail')
const showInboxMail = require('./mail/showInboxMail')
const showOutboxMail = require('./mail/showOutboxMail')
const showMessage = require('./mail/message')
const isAuthenticated = require(path.join(__base, '/routes/auth/handlers/middleware/isAuthenticated'))

router.get('/edit-profile/', isAuthenticated, showEditProfile)
router.get('/mail', showMail)
router.get('/mail/message/:id', showMessage)
router.get('/mail/inbox', showInboxMail)
router.get('/mail/outbox', showOutboxMail)
router.get('/profile/:id', isAuthenticated, showProfile)
router.get('/contact/:id', isAuthenticated, showContactForm)
router.post('/contact/:id', isAuthenticated, contactForm)

module.exports = router
