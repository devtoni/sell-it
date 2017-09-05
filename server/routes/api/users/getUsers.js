const path = require('path')
const User = require(path.join(__base, '/models/User'))

function getUsers (req, res) {
  User
  .aggregate([
    {
      $project: {
        female: {
          $cond: [ { $eq: ['$gender', 'female' ] }, 1, 0]
        },
        male: {
          $cond: [ { $eq: [ '$gender', 'male' ] }, 1, 0]
        }
      }
    },
    {
      $group: {
        _id: '$gender',
        female: { $sum: '$female' },
        male: { $sum: '$male'}
      }
    }
  ])
  .then((users) => res.json(users))
  .catch((error) => res.send(error))
}

module.exports = getUsers
