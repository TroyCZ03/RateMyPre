import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm.js'; 
import '../components/login/login.css';

 
function LoginPage({ onLogin }) {
    return (
        <div>
            <h2 className="Header1">Login</h2>
            <LoginForm onLogin={onLogin} />
            <Link to="/">
                <div className="return-home1">Home Page</div>
            </Link>
        </div>
    );
}

export default LoginPage;
