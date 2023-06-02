const router = require('express').Router();
const UserController = require('../controller/userController');

router.get('/', UserController.users);

module.exports = router;
