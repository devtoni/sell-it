const express = require('express')
const router = express.Router()
const getHome = require('./handlers/getHome')

router.get('/', getHome)

module.exports = router
