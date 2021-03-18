const { Router } = require('express')
const seasonController = require('../controllers/seasonControllers')

const router  = Router()

router.get('/addseason', seasonController.add_season)

module.exports = router