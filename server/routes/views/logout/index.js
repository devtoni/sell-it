const express = require('express')
const router = express.Router()
const getLogout = require('./handlers/getLogout')

router.get('/logout', getLogout)

module.exports = router
