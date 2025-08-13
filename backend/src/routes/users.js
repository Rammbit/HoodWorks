const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration
router.post('/signup', userController.signup);

// User login
router.post('/login', userController.login);

// TODO: Add other user routes (profile, etc.)

module.exports = router;
