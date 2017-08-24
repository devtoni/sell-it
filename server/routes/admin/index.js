const express = require('express')
const router = express.Router()
const adminPanel = require('./handlers/adminPanel')

router.get('/panel', adminPanel)

module.exports = router
