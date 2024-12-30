import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/Register/RegisterForm.js'; 
import '../components/Register/register.css';
 
 
function RegisterPage({}) {
    return (
        <div>
            <h2 className="Header1">Register </h2>
            <RegisterForm></RegisterForm> 
            <Link to="/">
                <div className="return-home">Home Page</div>
             </Link>
              <Link to="/login">
                <div className="return-login">I already have an account</div>
            </Link>
        </div>
    );
}

export default RegisterPage;
