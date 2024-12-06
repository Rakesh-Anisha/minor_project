
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const email = 'admin@gmail.com'; // Example, replace with actual login logic
  const name = 'Admin User'; // Example, replace with actual login logic
  const imageUrl = ''; // Leave empty to use default circle

  const handleLogout = () => {
    navigate('/');
  };

  
  const handleCreateStudent = () => {
    navigate('/create-student');
  };

  const handleCreateTeacher = () => {
    navigate('/create-teacher');
  };

  const handleCreateSubject = () => {
    navigate('/create-subject');
  };

  const handleCreateClass = () => {
    navigate('/create-class');
  };

  const handleCreateDepartment = () => {
    navigate('/create-department');
  };

  const handleCreateSection = () => {
    navigate('/create-section');
  };

  return (
    <div className="admin-dashboard">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Admin Dashboard</div>
        <div className="profile">
          <span>{email}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="admin-profile">
            {/* Admin profile image or default circle */}
            {imageUrl ? (
              <img src={imageUrl} alt="Admin" className="admin-img" />
            ) : (
              <div className="admin-img default-img">{name[0]}</div> // Default letter if no image
            )}
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
          <button onClick={handleCreateStudent}>Create Student</button>
          <button onClick={handleCreateTeacher}>Create Teacher</button>
          <button onClick={handleCreateSubject}>Create Subject</button>
          <button onClick={handleCreateClass}>Create Class</button>
          <button onClick={handleCreateDepartment}>Create Department</button>
          <button onClick={handleCreateSection}>Create Section</button>
        </div>

        {/* Main Content Section */}
        <div className="main-content">
          <h2>Welcome, {name}</h2>
          <p>Manage the school system through the sections on the sidebar.</p>

          {/* Stats Cards Section */}
          <div className="stats-cards">
            <div className="card">
              <h3>Total Students</h3>
              <p>500</p>
            </div>
            <div className="card">
              <h3>Total Teachers</h3>
              <p>45</p>
            </div>
            <div className="card">
              <h3>Total Classes</h3>
              <p>20</p>
            </div>
            <div className="card">
              <h3>Total Subjects</h3>
              <p>10</p>
            </div>
            <div className="card">
              <h3>Total Departments</h3>
              <p>5</p>
            </div>
            <div className="card">
              <h3>Total Sections</h3>
              <p>12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
