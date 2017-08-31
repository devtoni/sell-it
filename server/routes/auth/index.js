const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const postRegister = require('./handlers/postRegister')
const postLogin = require('./handlers/postLogin')

router.post('/register', postRegister)
router.post('/login', passport.authenticate('local', {
  session: true,
  successRedirect: '/'
}), postLogin)

module.exports = router
