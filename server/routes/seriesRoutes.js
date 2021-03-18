const { Router } = require('express')
const seriesController = require('../controllers/seriesControllers')

const router = Router()

router.get('/series', seriesController.series_get)
router.get('/series/:id', seriesController.series_details)

router.get('/addseries', seriesController.add_series)

module.exports = router