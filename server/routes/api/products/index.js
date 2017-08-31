const express = require('express')
const router = express.Router()
const passport = require(__base + '/config/passport')
const addProduct = require('./handlers/addProduct')
const getProducts = require('./handlers/getProducts')

router.post('/api/add-product/', passport.authenticate('jwt', { session: false }), addProduct)
router.get('/api/products', getProducts)

module.exports = router
