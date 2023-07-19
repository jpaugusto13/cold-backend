const router = require('express').Router();
const controller = require('../controller/doubleDeleteBetController');

router.delete('/deleteBet', controller.deleteBet);

module.exports = router;