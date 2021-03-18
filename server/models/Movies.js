const mongoose = require('mongoose')

const { Schema } = mongoose;

const movieSchema = new Schema({
    year: {
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
    duration: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    grossing: {
        type: String,
        required: true
    },
    director: {
        type: Array,
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
    watch: {
        type: String,
        required: true
    },
    seen: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie