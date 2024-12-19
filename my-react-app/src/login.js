import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import './App.css';
import './login.css';


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data.accessToken);
        alert('Login successful!');
      } else {
        alert('Failed to login: ' + data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to login due to an error.');
    }
  };

  return (
    <div>
      <h2 className = "Header1" >Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <Link to="/">
        <div className="return-home1">Home Page</div>
        </Link>
    </div>
  );
}

export default Login;
