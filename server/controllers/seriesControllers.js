const Series = require('../models/Series')

module.exports.series_get = (req, res) => {
    Series.find()
        .then(result => res.send(result))
}

module.exports.series_details = (req, res) => {
    const id = req.params.id
    Series.findById(id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err)
        })
}

module.exports.add_series = (req, res) => {
    // Series.create({
    //     "genre": ["Action", "Adventure", "Drama"],
    //     "stars": ["Emilia Clarke", "Peter Dinklage", "Kit Harington"],
    //     "original_release": 2011,
    //     "title": "Game of Thrones",
    //     "running_time": "57 minutes",
    //     "rate": 9.3,
    //     "num_of_seasons": 8,
    //     "language": "English",
    //     "brief": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    //     "poster": "https://dgeiu3fz282x5.cloudfront.net/g/x/x-240417.jpg",
    //     "land_poster": "https://images2.alphacoders.com/719/thumb-1920-719056.jpg",
    //     "age_rate": "18",
    //     "trailer": "https://www.youtube.com/embed/gcTkNV5Vg1E"
    // })
}