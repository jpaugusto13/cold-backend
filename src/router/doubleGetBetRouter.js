const router = require('express').Router();
const controller = require('../controller/doubleGetBetController');

router.get('/getBet', controller.getBet);

module.exports = router;
