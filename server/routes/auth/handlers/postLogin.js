const User = require('../../../models/User')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET || 'supersecret'
function postLogin (req, res) {
  console.log(`${req.body.email} && ${req.body.password}`)
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      res.send({
        success: false,
        message: 'Authentication failed. User not found.'
      })
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign(user, SECRET, {
            expiresIn: '2 days'
          })
          res.json({
            success: true,
            message: 'Authentication successfull',
            token
          })
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
