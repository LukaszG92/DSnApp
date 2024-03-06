const router = require("express").Router()
const apiController = require('../controllers/apiController')

router.get('/getToken', apiController.getToken);

module.exports = router;