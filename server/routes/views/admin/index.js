const express = require('express')
const router = express.Router()
const getAdminPanel = require('./handlers/getAdminPanel')

router.get('/panel', getAdminPanel)

module.exports = router
