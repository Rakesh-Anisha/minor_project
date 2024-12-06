// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const adminAuthRoutes = require('./routes/AdminAuthRoutes.js');
const studentAuthRoutes = require('./routes/StudentAuthRoutes.js');
const teacherAuthRoutes = require('./routes/TeacherAuthRoutes.js');
const config = require('./config/config');
const cors = require('cors');
// Initialize Express app
const app = express();
// Enable CORS for all origins (you can modify this to restrict to specific domains)
app.use(cors());  // Enable CORS
// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use auth routes

app.use('/api/auth/admin', adminAuthRoutes);
app.use('/api/auth/student', studentAuthRoutes);
app.use('/api/auth/teacher', teacherAuthRoutes);
// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
