const { Router } = require('express')
const episodeController = require('../controllers/episodeControllers')

const router = Router()

router.get('/addepisode', episodeController.add_episode)

module.exports = router