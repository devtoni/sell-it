const User = require('../../../models/User')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET || 'supersecret'
function postLogin (req, res) {
  const {email} = req.body
  User.findOne({ email })
  .then(user => {
    if (!user) {
      res.send({
        success: false,
        message: 'Authentication failed. User not found.'
      })
    } else {
      // Check if password matches
      const {password} = req.body
      user.comparePassword(password, function (err, isMatch) {
        if (isMatch && !err) {
          res.redirect('/profile')
        } else {
          res.send({
            success: false,
            message: 'Authentication failed. Passwords did not match.'
          })
        }
      })
    }
  })
  .catch((e) => console.log(e))
}

module.exports = postLogin

 // Create token if the password matched and no error was thrown
//  var token = jwt.sign(user, 'supersecret', {
//   expiresIn: '24h'
// })
//           // res.json({
          //   success: true,
          //   message: 'Authentication successfull',
          //   token: 'JWT ' + token
          // })
