import React, { useState } from 'react';
import axios from 'axios';
import exampleImage from './assets/img.jpg'; // Ensure the correct file extension and path

const AuthPage = (props) => {
  // State to manage the username input value
  const [username, setUsername] = useState('');

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    // Post the username to the API
    axios.post('https://chat-app-production-ae8d.up.railway.app/authenticate', { username })
      .then(r => props.onAuth({ ...r.data, secret: username }))
      .catch(e => console.log('error', e));
  }

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <img src={exampleImage} alt="AnonGram Logo" />
        <div className="form-title">Welcome to AnonGram👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
