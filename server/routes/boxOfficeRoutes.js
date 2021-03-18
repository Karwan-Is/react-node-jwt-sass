const { Router } = require('express')
const boxOfficeController = require('../controllers/boxOfficeControllers')

const router = Router();

router.get('/boxoffice', boxOfficeController.box_office_get)
router.post('/boxoffice', boxOfficeController.box_office_post)

module.exports = router