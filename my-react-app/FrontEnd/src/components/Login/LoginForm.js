import React, { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import './login.css';

 

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
const LoginForm = () => {
    const emailRef = useRef();
    const pwdRef = useRef();
    const errRef = useRef();

    // Username State
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    // Password State
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // Error Message State
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Focus on username input on component mount
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    // Validate Username
    useEffect(() => {
        const isValid = EMAIL_REGEX.test(email);
        setValidEmail(isValid);
    }, [email]);

    // Validate Password
    useEffect(() => {
        const isValid = PWD_REGEX.test(pwd);
        setValidPwd(isValid);
    }, [pwd]);

    // Clear error message when user modifies input
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Final validation before submission
        const isValidEmail = EMAIL_REGEX.test(email);
        const isValidPwd = PWD_REGEX.test(pwd);
        if (!isValidEmail || !isValidPwd) {
            setErrMsg("Invalid Entry");
            return;
        }

        try { const reponse = await axios.post ('http://localhost:8000/api/auth/login', {
            email: email,
            password: pwd 
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
             console.log(reponse.data);
             setEmail('');
             setPwd('');
             setSuccess(true);
        } catch (error) {
            setErrMsg("Login Failed");
            errRef.current.focus();
        }
    };

    return (
        <section>
            {success ? (
                <div>
                    <h1>Login Successful!</h1>
                    <p>You are now logged in.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                        {errMsg}
                    </p>
                    
                    {/* Username Field */}
                 <label htmlFor="email" className = "Header2">Email:
                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                    </label>
                    <input
                        className="form-input"
                        id="email"
                        type="email"
                        ref={emailRef}
                        onChange={(e) => setEmail(e.target.value)}
                        value = {email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emNote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                     />
                    <p id = "emNote" className={emailFocus && email && !validEmail ? "instructionsLog" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must be a valid email address.
                    </p>

                    {/* Password Field */}
                    <label className="Header2" htmlFor="password">
                        Password:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        className="form-input"
                        id="password"
                        type="password"
                        ref = {pwdRef}
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructionsLog" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters. Must include uppercase and lowercase letters, a number, and a special character.
                    </p>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className= {!validEmail || !validPwd ? "disable-Login" :"form-button-Login"}
                    >
                        Sign In
                    </button>
                </form>
            )}
        </section>
    );
};

export default LoginForm;
