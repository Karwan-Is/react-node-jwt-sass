const mongoose = require('mongoose')

const slidShowsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    land_poster: {
        type: String,
        required: true
    }
}, { timestamps: true })

const SlideShow = mongoose.model('SlideShow', slidShowsSchema)

module.exports = SlideShow