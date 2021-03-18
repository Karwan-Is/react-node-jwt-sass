const mongoose = require('mongoose')

const { Schema } = mongoose;

const episodeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    season_num: {
        type: Number,
        required: true
    },
    episode_title: {
        type: String,
        required: true
    },
    episode_num: {
        type: Number,
        required: true
    },
    episode_release: {
        type: Date,
        required: true
    },
    episode_running_time: {
        type: String,
        required: true
    },
    episode_stars: {
        type: Array,
        required: true
    },
    episode_rate: {
        type: Number,
        required: true
    },
    episode_brief: {
        type: String,
        required: true
    },
    episode_poster: {
        type: String,
        required: true
    },
    episode_land_poater: {
        type: String,
        required: true
    },
    episode_trailer: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Episode = mongoose.model('Episode', episodeSchema)
module.exports = Episode