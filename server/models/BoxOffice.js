const mongoose = require('mongoose')

const boxOfficeSchema = new mongoose.Schema({
    top: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    weekly_gross: {
        type: Number,
        required: true
    },
    total_gross: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
}, { timestamps: true })

const BoxOffice = mongoose.model('BoxOffice', boxOfficeSchema)

module.exports = BoxOffice