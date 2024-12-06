// routes/TeacherAuthRoutes.js
const express = require('express');
const { createTeacher, login } = require('../controllers/TeacherAuthController');  // Ensure correct import
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register route (create admin)
router.post('/register', createTeacher);  // Use createAdmin here

// Login route
router.post('/login', login);

// Example protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'This is your profile', user: req.user });
});

module.exports = router;
