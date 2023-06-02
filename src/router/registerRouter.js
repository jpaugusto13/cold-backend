const router = require('express').Router();
const controller = require('../controller/registerController');

router.post('/register', controller.register);

module.exports = router;
