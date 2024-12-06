
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const email = 'teacher@gmail.com'; // Example, replace with actual login logic
  const name = 'Teacher User'; // Example, replace with actual login logic
  const imageUrl = ''; // Leave empty to use default circle

  const handleLogout = () => {
    navigate('/');
  };

  const handleMarkAttendance = () => {
    navigate('/mark-attendance');
  };

  const handleViewStudentDetails = () => {
    navigate('/view-student-details');
  };

  const handleViewSchedule = () => {
    navigate('/view-schedule');
  };

  return (
    <div className="teacher-dashboard">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Teacher Dashboard</div>
        <div className="profile">
          <span>{email}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="teacher-profile">
            {/* Teacher profile image or default circle */}
            {imageUrl ? (
              <img src={imageUrl} alt="Teacher" className="teacher-img" />
            ) : (
              <div className="teacher-img default-img">{name[0]}</div> // Default letter if no image
            )}
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
          <button onClick={handleMarkAttendance}>Mark Attendance</button>
          <button onClick={handleViewStudentDetails}>View Student Details</button>
          <button onClick={handleViewSchedule}>View Schedule</button>
        </div>

        {/* Main Content Section */}
        <div className="main-content">
          <h2>Welcome, {name}</h2>
          <p>Manage your teaching tasks and responsibilities through the sections on the sidebar.</p>

          {/* Stats Cards Section */}
          <div className="stats-cards">
            <div className="card">
              <h3>Assigned Classes</h3>
              <p>4</p>
            </div>
            <div className="card">
              <h3>Total Students</h3>
              <p>100</p>
            </div>
            <div className="card">
              <h3>Upcoming Lectures</h3>
              <p>5</p>
            </div>
            <div className="card">
              <h3>Pending Attendance</h3>
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
