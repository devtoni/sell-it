const path = require('path')
const Message = require(path.join(__base, '/models/Messages'))
const async = require('async')
const _ = require('lodash')

function showMessage (req, res) {
  const { id } = req.params
  const { user } = req
  const section = 'mail'

  const author = Message.findById(id).populate('author')
  const receiver = Message.findById(id).populate('receiver')

  Promise.all([author, receiver])
         .then((results) => {
           res.render('pages/message', { section, user, results })
         })
}

module.exports = showMessage
