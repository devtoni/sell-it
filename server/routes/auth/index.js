const express = require('express')
const router = express.Router()
const getLogin = require('./handlers/getLogin')
const getLogout = require('./handlers/getLogout')
const postRegister = require('./handlers/postRegister')
const getRegister = require('./handlers/getRegister')
const postLogin = require('./handlers/postLogin')

router.get('/logout', getLogout)
router.get('/login', getLogin)

router
      .route('/register')
      .get(getRegister)
      .post(postRegister)

router
      .route('/login')
      .get(getLogin)
      .post(postLogin)

module.exports = router
