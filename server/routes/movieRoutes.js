const { Router } = require('express')
const movieController = require('../controllers/movieControllers')

const router = Router()

router.post('/movies', movieController.movies_post)
router.get('/search', movieController.search_get)

router.get('/movies', movieController.movies_get)
router.get('/movies/:id', movieController.movie_details)

router.post('/addmovie', movieController.add_movie)

module.exports = router