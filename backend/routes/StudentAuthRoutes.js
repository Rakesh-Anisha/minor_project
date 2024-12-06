const express = require('express');
const { createStudent, login } = require('../controllers/StudentAuthtController.js');
  // Ensure correct import
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register route (create student)
router.post('/register', createStudent);

// Login route
router.post('/login', login);

// Example protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'This is your profile', user: req.user });
});

module.exports = router;
