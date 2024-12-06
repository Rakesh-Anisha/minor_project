// controllers/TeacherAuthController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Teacher');
const config = require('../config/config');
const Teacher = require('../models/Teacher');

// Create a new Teacher (register)
exports.createTeacher = async (req, res) => {
  const { first_name, last_name, email, password, phone_number, role } = req.body;

  // Validate required fields
  if (!first_name || !last_name || !email || !password || !phone_number) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher with this email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new Teacher
    const newTeacher = new Teacher({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone_number,
      role: role || 'admin', // Default role is 'Teacher'
    });

    // Save the Teacher to the database
    await newTeacher.save();

    // Return success message
    res.status(201).json({ message: 'Teacher created successfully', teacher: newTeacher });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Login Teacher and generate JWT
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find teacher by email
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: teacher._id, email: teacher.email },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

