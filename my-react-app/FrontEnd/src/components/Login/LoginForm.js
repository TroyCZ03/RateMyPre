import React, { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css';

// Username Regex: 4-24 characters, starts with a letter, allows letters, numbers, underscores, hyphens
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// Password Regex: 8-24 characters, at least one lowercase letter, one uppercase letter, one digit, one special character
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;

const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    // Username State
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    // Password State
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // Error Message State
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Focus on username input on component mount
    useEffect(() => {
        userRef.current.focus();
    }, []);

    // Validate Username
    useEffect(() => {
        const isValid = USER_REGEX.test(user);
        setValidName(isValid);
    }, [user]);

    // Validate Password
    useEffect(() => {
        const isValid = PWD_REGEX.test(pwd);
        setValidPwd(isValid);
    }, [pwd]);

    // Clear error message when user modifies input
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Final validation before submission
        const isValidName = USER_REGEX.test(user);
        const isValidPwd = PWD_REGEX.test(pwd);
        if (!isValidName || !isValidPwd) {
            setErrMsg("Invalid Entry");
            return;
        }

        try {
            // Replace the following with your login logic (e.g., API call)
            // Example:
            // const response = await axios.post('/login', { username: user, password: pwd });
            // if (response.status === 200) {
            //     setSuccess(true);
            // }

            // For demonstration, we'll assume login is successful
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
                    <label className="Header2" htmlFor="username">
                        Username:
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                    </label>
                    <input
                        className="form-input"
                        id="username"
                        type="text"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.
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
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters. Must include uppercase and lowercase letters, a number, and a special character.
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={!validName || !validPwd}
                    >
                        Sign In
                    </button>
                </form>
            )}
        </section>
    );
};

export default LoginForm;
