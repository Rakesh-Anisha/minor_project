import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Website</div>
      <div className="nav-links">
        <Link to="/admin-login">Admin Login</Link>
        <Link to="/student-login">Student Login</Link>
        <Link to="/teacher-login">Teacher Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
