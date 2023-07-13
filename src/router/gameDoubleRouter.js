const router = require('express').Router();
const controller = require('../controller/gameDoubleController');

router.post('/', controller.double); // Modifique para '/' em vez de '/gameDouble'

module.exports = router;
