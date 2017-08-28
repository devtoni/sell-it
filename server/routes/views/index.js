const express = require('express')
const router = express.Router()

const routeUser = require('./user/')
const routeProducts = require('./products/')
const routeProduct = require('./product/')
const routeAdmin = require('./admin/')
const routeHome = require('./home/')

router.use(routeUser)
router.use(routeProducts)
router.use(routeProduct)
router.use(routeAdmin)
router.use(routeHome)

module.exports = router
