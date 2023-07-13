const router = require('express').Router();
const controller = require('../controller/doublePlayController');

router.put('/play', controller.play);

module.exports = router;
