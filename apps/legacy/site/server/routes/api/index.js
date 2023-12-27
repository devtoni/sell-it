const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: path.join(__base, process.env.UPLOAD_FOLDER) })
const uploadCloudinary = require(path.join(__base, '/config/cloudinary'))

const deleteProduct = require('./product/deleteProduct')
const updateProduct = require('./product/updateProduct')
const addProduct = require('./products/addProduct')
const getProducts = require('./products/getProducts')
const updateProfile = require('./user/updateProfile')
const getUsers = require('./users/getUsers')
const getCategories = require('./categories/getCategories')
const updateFavourites = require('./user/updateFavourites')
const deleteMessages = require('./messages/deleteMessages')
const deleteAdminProduct = require('./product/deleteAdminProduct')
const isAuthenticated = require(path.join(__base, '/routes/auth/handlers/middleware/isAuthenticated'))
const isAdmin = require(path.join(__base, '/routes/auth/handlers/middleware/isAdmin'))
const healthz = require('./infra/healthz');

router.put('/user/update', upload.single('avatarUrl'), uploadCloudinary, updateProfile)
router.put('/user/update/product/:id', isAuthenticated, updateProduct)
router.put('/user/update/favourites/', isAuthenticated, updateFavourites)
router.post('/user/add-product', isAuthenticated, upload.single('imgLocal'), uploadCloudinary, addProduct)
router.delete('/user/delete/product/:id', isAuthenticated, deleteProduct)
router.delete('/admin/delete/product/:id', deleteAdminProduct)
router.delete('/user/messages/delete', deleteMessages)

// API ROUTES TO MANIPULATE INFO
router.get('/api/users/', /* isAdmin, */ getUsers)
router.get('/api/products/all/', /* isAdmin, */ getProducts)
router.get('/api/categories/', /* isAdmin, */ getCategories)

// HEALTH ENDPOINT
router.get('/healthz', healthz);

module.exports = router
