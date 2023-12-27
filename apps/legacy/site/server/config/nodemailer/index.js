const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport('smtps://sellitskylab%40gmail.com:sellitapp@smtp.gmail.com')

module.exports = transporter
