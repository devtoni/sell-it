const path = require('path')
const transporter = require(path.join(__base, 'config/nodemailer'))
const Message = require(path.join(__base, 'models/Messages'))
const User = require(path.join(__base, 'models/User'))

function contactForm (req, res) {
  const { user } = req
  const { email, text } = req.body
  const { id } = req.params
  const subject = `Message from SellitApp: ${user.username} is interested in your product`
  const mailOptions = {
    from: '"Administrator"',
    to: 'devtonirm@gmail.com',
    subject, // Subject line
    text
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error)
    }
  })

  const message = new Message({
    subject,
    content: text,
    author: user._id,
    receiver: id
  })

  message.save()
    .then((message) => {
      User.findByIdAndUpdate(user._id, { $push: {sentMessages: message._id} })
          .then((user) => console.log('user uploaded'))
      User.findByIdAndUpdate(id, { $push: {receivedMessages: message._id} })
          .then((user) => console.log('received ok'))
      res.redirect(`/profile/${user._id}`)
    })
}

module.exports = contactForm
