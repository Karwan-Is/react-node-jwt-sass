const mongoose = require('mongoose')

const { Schema } = mongoose;

const seasonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    season_num: {
        type: Number,
        required: true
    },
    season_release: {
        type: Number,
        required: true
    },
    season_director: {
        type: Array,
        required: true
    },
    num_of_episodes: {
        type: Number,
        required: true
    },
    season_rate: {
        type: Number,
        required: true
    },
    season_stars: {
        type: Array,
        required: true
    },
    season_brief: {
        type: String,
        required: true
    },
    season_poster: {
        type: String,
        required: true
    },
    season_land_poster: {
        type: String,
        required: true
    },
    season_trailer: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Season = mongoose.model('Season', seasonSchema)
module.exports = Season