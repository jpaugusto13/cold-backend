const router = require('express').Router();
const controller = require('../controller/loginController');

router.post('/login', controller.login);

module.exports = router;
