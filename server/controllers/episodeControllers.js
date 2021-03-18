const Episode = require('../models/Episodes')

module.exports.add_episode = (req, res) => {
    Episode.create({})
}