// controllers/AdminAuthController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student= require('../models/Student');
const config = require('../config/config');

// Create a new student (register)
exports.createStudent = async (req, res) => {
  const { first_name, last_name, email, password, phone_number, role } = req.body;

  // Validate required fields
  if (!first_name || !last_name || !email || !password || !phone_number) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the student already exists,
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new Student
    const newStudent = new Student({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone_number,
      role: role || 'admin', // Default role is 'admin'
    });

    // Save the admin to the database
    await newStudent.save();

    // Return success message
    res.status(201).json({ message: 'Student created successfully', student: newStudent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Login Student and generate JWT
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin by email
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: student._id, email: student.email },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

