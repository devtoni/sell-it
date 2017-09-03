const cloudinary = require('cloudinary')
const del = require('del')
const path = require('path')
const UPLOAD_FOLDER = process.env.UPLOAD_FOLDER

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

function uploadCloudinary (req, res, next) {
  if (req.file) {
    cloudinary.uploader.upload(req.file.path, ({ url }) => {
      if (url) {
        req.body.imgUrl = url
        // delete files inside folder but not the folder itself
      //  del.sync([`${}/**`, `!${}`])
        next()
      } else {
        res.status(404).send('Oh uh, something went wrong')
      }
    })
  } else {
    next()
  }
}

module.exports = uploadCloudinary
