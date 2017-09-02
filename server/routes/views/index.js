const express = require('express')
const router = express.Router()

const path = require('path')
const passport = require(path.join(__base, '/config/passport/'))

const showHome = require('./home/showHome')
const showLogin = require('./login/showLogin')
const showLogout = require('./logout/showLogout')
const showRegister = require('./register/showRegister')
const showAddProduct = require('./product/showAddProduct')
const showDetailProduct = require('./product/showDetailProduct')
const showProducts = require('./products/showProducts')
const showAdminLogin = require('./admin/showAdminLogin')

router.get('/', showHome)
router.get('/register', showRegister)
router.get('/login', showLogin)
router.get('/logout', showLogout)
router.get('/register', showRegister)
router.get('/add-product', showAddProduct)
router.get('/product/:id', showDetailProduct)
router.get('/products/', showProducts)
router.get('/admin/login', showAdminLogin)

module.exports = router
