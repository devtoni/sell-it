const express = require('express')
const router = express.Router()

const showHome = require('./home/showHome')
const showLogin = require('./login/showLogin')
const showRegister = require('./register/showRegister')
const showAddProduct = require('./product/showAddProduct')
const showDetailProduct = require('./product/showDetailProduct')
const showProducts = require('./products/showProducts')
const showAdminLogin = require('./admin/showAdminLogin')

router.get('/', showHome)
router.get('/register', showRegister)
router.get('/login', showLogin)
router.get('/register', showRegister)
router.get('/add-product', showAddProduct)
router.get('/product/:id', showDetailProduct)
router.get('/products/?', showProducts)
router.get('/admin/login/', showAdminLogin)

module.exports = router
