const express = require('express')
const router = express.Router()
const path = require('path')
const passport = require(path.join(__base, '/config/passport/'))

const handleRegister = require('./handlers/handleRegister')
const handleLogin = require('./handlers/handleLogin')
const handleAdminLogin = require('./handlers/handleAdminLogin')
const handleLogout = require('./handlers/handleLogout')
const isAdmin = require('./handlers/middleware/isAdmin')

router.post('/register', handleRegister)
router.post('/login', passport.authenticate('local', {session: true}), handleLogin)
router.post('/admin/login', passport.authenticate('local', {session: true}), isAdmin, handleAdminLogin)
router.get('/logout', handleLogout)
module.exports = router
