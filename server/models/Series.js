const mongoose = require('mongoose')

const { Schema } = mongoose;

const seriesSchema = new Schema({
    original_release: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    running_time: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    num_of_seasons: {
        type: Number,
        required: true
    },
    stars: {
        type: Array,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    land_poster: {
        type: String,
        required: true
    },
    age_rate: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Series = mongoose.model('Series', seriesSchema)

module.exports = Series