const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showOutBox (req, res) {
  const { user } = req
  const section = 'mail'
  const populateMessages = User.findById(user._id).populate('sentMessages')
  populateMessages.then(user => {
    const messagesReceptor = user.sentMessages.map((message) => User.findById(message.receiver, { avatarUrl: 1, username: 1}))
    Promise.all(messagesReceptor)
    .then((usersReceptors) => {
      res.render('pages/outbox', { section, user, usersReceptors })
    })
  })
}

module.exports = showOutBox
