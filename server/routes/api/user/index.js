const express = require('express')
const router = express.Router()
const updateProfile = require('./handlers/updateProfile')
const passport = require(__base + '/config/passport')

router.put('/api/user/edit/:id', passport.authenticate('jwt', { session: false }), updateProfile)

module.exports = router
