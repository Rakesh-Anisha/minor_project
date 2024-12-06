

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const email = 'student@gmail.com'; // Example, replace with actual login logic
  const name = 'Student User'; // Example, replace with actual login logic
  const imageUrl = ''; // Leave empty to use default circle

  const handleLogout = () => {
    navigate('/');
  };

  const handleViewAttendance = () => {
    navigate('/view-attendance');
  };

  const handleViewGrades = () => {
    navigate('/view-grades');
  };

  const handleViewSchedule = () => {
    navigate('/view-schedule');
  };

  return (
    <div className="student-dashboard">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Student Dashboard</div>
        <div className="profile">
          <span>{email}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="student-profile">
            {/* Student profile image or default circle */}
            {imageUrl ? (
              <img src={imageUrl} alt="Student" className="student-img" />
            ) : (
              <div className="student-img default-img">{name[0]}</div> // Default letter if no image
            )}
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
          <button onClick={handleViewAttendance}>View Attendance</button>
          <button onClick={handleViewGrades}>View Grades</button>
          <button onClick={handleViewSchedule}>View Schedule</button>
        </div>

        {/* Main Content Section */}
        <div className="main-content">
          <h2>Welcome, {name}</h2>
          <p>Manage your academic information and tasks through the sections on the sidebar.</p>

          {/* Stats Cards Section */}
          <div className="stats-cards">
            <div className="card">
              <h3>Total Subjects</h3>
              <p>6</p>
            </div>
            <div className="card">
              <h3>Upcoming Exams</h3>
              <p>2</p>
            </div>
            <div className="card">
              <h3>Completed Assignments</h3>
              <p>5</p>
            </div>
            <div className="card">
              <h3>Pending Attendance</h3>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
