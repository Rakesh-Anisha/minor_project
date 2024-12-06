import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLoginPage from './components/AdminLoginPage';
import StudentLoginPage from './components/StudentLoginPage';
import TeacherLoginPage from './components/TeacherLoginPage';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

import CreateStudent from './components/CreateStudent';
import CreateTeacher from './components/CreateTeacher';
function App() {
  return (
  
      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/teacher-login" element={<TeacherLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/create-teacher" element={<CreateTeacher />} />
      </Routes>
    </Router>
    
  );
}

export default App;
