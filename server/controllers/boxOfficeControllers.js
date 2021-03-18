const BoxOffice = require('../models/BoxOffice')

module.exports.box_office_get = (req, res) => {
    BoxOffice.find()
        .then(result => res.json(result))
    
}

module.exports.box_office_post = (req, res) => {
    BoxOffice.create(req.body)
}
