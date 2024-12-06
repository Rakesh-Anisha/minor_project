const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone_number: {
        type: String,
        required: false,
      },
      role: {
        type: String,
        default: 'admin',
      },
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
