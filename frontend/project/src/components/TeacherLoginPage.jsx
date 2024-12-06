import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginPage.css';

const API_URL = 'http://localhost:4000/api/auth';

const TeacherLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('Attempting teacher login with:', { email });
      const response = await axios.post(`${API_URL}/teacher/login`, {
        email,
        password
      });

      console.log('Login response:', response.data);

      if (response.data && response.data.token) {
        // Store the token
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userRole', 'teacher');
        localStorage.setItem('userData', JSON.stringify(response.data.user));

        // Navigate to the teacher dashboard
        navigate('/teacher-dashboard');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);

      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error response:', error.response.data);
        setError(error.response.data.message || 'Invalid credentials');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-background"></div>
      <Link to="/" className="back-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Home
      </Link>
      
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 17H22V15C22 13.89 21.11 13 20 13H18V15H20V17ZM20 7H22V5C22 3.89 21.11 3 20 3H18V5H20V7ZM16 13V5C16 3.89 15.11 3 14 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H14C15.11 21 16 20.11 16 19V17H18V15H16V13ZM14 19H4V5H14V19Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="login-title">Teacher Login</h2>
          <p className="login-subtitle">Access your teaching portal</p>
        </div>

        {error && (
          <div className="error-message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" fill="currentColor"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              'Login to Portal'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLoginPage;
