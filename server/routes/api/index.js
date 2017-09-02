const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const deleteProduct = require('./product/deleteProduct')
const updateProduct = require('./product/updateProduct')
const addProduct = require('./products/addProduct')
const getProducts = require('./products/getProducts')
const updateProfile = require('./user/updateProfile')
const getUsers = require('./users/getUsers')

router.delete('/api/delete/:id', passport.authenticate('jwt', { session: false }), deleteProduct)
router.put('/api/user/update', passport.authenticate('jwt', { session: false }), updateProfile)
router.put('/api/update-product/:id', passport.authenticate('jwt', { session: false }), updateProduct)
router.post('/api/add-product', passport.authenticate('jwt', { session: false }), addProduct)
router.get('/api/users', getUsers)
router.get('/api/products/?', getProducts)

module.exports = router
