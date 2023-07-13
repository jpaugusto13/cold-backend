const router = require('express').Router();
const controller = require('../controller/doubleUserBetController');

router.post('/bet', controller.betUser);

module.exports = router;
