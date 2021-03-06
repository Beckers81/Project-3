const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');

router.route('/')
  .post(userController.register);


router.route('/login')
  .post(userController.login);
  

module.exports = router;