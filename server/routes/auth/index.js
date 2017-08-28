const express = require('express')
const router = express.Router()
const getLogin = require('./handlers/getLogin')
const getLogout = require('./handlers/getLogout')
const postRegister = require('./handlers/postRegister')
const getRegister = require('./handlers/getRegister')
router.get('/logout', getLogout)
router.get('/login', getLogin)

router.route('/register')
      .get(getRegister)
      .post(postRegister)

module.exports = router
