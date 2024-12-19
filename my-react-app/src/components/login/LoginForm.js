import React, { useState } from 'react';
import './login.css';

// pass default argument even when onLogin not handled 
function LoginForm({ onLogin = () => {} }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  


    const handleSubmit = async (event) => {

        event.preventDefault();
        // TODO, set up to work have to set up actual local host 
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
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
        <form onSubmit={handleSubmit}>
            <label className = "Header2">
                Email:
                <input
                    className = "form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label className = "Header2">
                Password:
                <input
                    className = "form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button
                type="submit"
                className="pretty-log"
            >
                Login
            </button>

        </form>
    );
}

export default LoginForm;
