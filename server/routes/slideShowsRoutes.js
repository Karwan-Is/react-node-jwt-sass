const { Router } = require('express')
const slideShowController = require('../controllers/slideShowsControllers')

const router = Router()

router.get('/slideshows', slideShowController.slide_show_get)
router.post('/slideshows', slideShowController.slide_show_post)

module.exports = router