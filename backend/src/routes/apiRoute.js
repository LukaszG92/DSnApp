const router = require("express").Router()
const apiController = require('../controllers/apiController')

router.get('/mintTokens', apiController.mintTokens);

module.exports = router;