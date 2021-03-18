const SlideShow = require('../models/SlideShows')

module.exports.slide_show_get = (req, res) => {
    SlideShow.find()
        .then(result => res.json(result))
}

module.exports.slide_show_post = (req, res) => {
    // SlideShow.create(req.body)
};
