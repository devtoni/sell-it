const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const path = require('path')
const multer = require('multer')
// const uploadFolderPath = require(path.join(process.env.UPLOAD_FOLDER))
const upload = multer({ dest: 'C:/Users/toni/Pictures' })
const uploadCloudinary = require(path.join(__base, '/config/cloudinary'))

const deleteProduct = require('./product/deleteProduct')
const updateProduct = require('./product/updateProduct')
const addProduct = require('./products/addProduct')
const getProducts = require('./products/getProducts')
const updateProfile = require('./user/updateProfile')
const getUsers = require('./users/getUsers')
const getCategories = require('./categories/getCategories')

router.delete('/api/delete/product/:id', passport.authenticate('jwt', { session: false }), deleteProduct)
router.put('/api/user/update', passport.authenticate('jwt', { session: false }), p, upload.single('avatarUrl'), uploadCloudinary, updateProfile)
router.put('/api/update/product/:id', passport.authenticate('jwt', { session: false }), updateProduct)
router.post('/api/add-product', passport.authenticate('jwt', { session: false }), upload.single('imgLocal'), uploadCloudinary, addProduct)
router.get('/api/users', getUsers)
router.get('/api/products/?', getProducts)
router.get('/api/categories/', getCategories)

module.exports = router

function p (req, res, next) {
  const data = JSON.stringify(req.body)
  console.log(data)
  next()
}
