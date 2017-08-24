const express = require('express')
const router = express.Router()
const showAdmin = require('./handlers/showAdmin')
const adminPanel = require('./handlers/adminPanel')

router.get('/admin-login', showAdmin)
router.get('/panel', adminPanel)

module.exports = router
