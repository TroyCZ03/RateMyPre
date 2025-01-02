import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm.js'; 
import '../components/Login/login.css';

 
function LoginPage() {
    return (
        <div>
            <h2 className="Header1">Login</h2>
           <LoginForm></LoginForm> 
            <Link to="/">
                <div className="return-home">Home Page</div>
            </Link>
            <Link to="/register">
                <div className="return-login">I need to make an account</div>
            </Link>
        </div>
    );
}

export default LoginPage;
