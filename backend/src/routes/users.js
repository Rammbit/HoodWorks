const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

// User registration
router.post('/signup', userController.signup);

// User login
router.post('/login', userController.login);

// Get user profile (protected)
router.get('/me', auth, userController.getMe);

// TODO: Add other user routes (profile, etc.)

module.exports = router;
