import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('https://amazing_tripApp-backend.cloud-stacks.com/api/users', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred');
      }
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <header className="signup-header">Create User Account</header>
      <nav className="signup-nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <div className="additional-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/login">Log in</a>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <footer className="signup-footer">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default SignUp;
