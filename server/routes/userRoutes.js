const router = require('express').Router()
const userController = require('../controllers/userControllers')

router.post('/signin', userController.signin_post)
router.post('/signup', userController.signup_post)

router.get('/signout', userController.signout_get)

module.exports = router