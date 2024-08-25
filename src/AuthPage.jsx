import React from 'react';
import axios from 'axios';
import exampleImage from './assets/img.jpg'; // Replace '.jpg' with the actual file extension
 // Ensure the correct path

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post('http://localhost:3001/authenticate', { username: value })
      .then(r => props.onAuth({ ...r.data, secret: value }))
      .catch(e => console.log('error', e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <img src={exampleImage} alt="AnonGram Logo" />
        <div className="form-title">Welcome to AnonGram👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
