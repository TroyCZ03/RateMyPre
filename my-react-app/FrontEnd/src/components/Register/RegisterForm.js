import React, { useState, useRef, useEffect} from 'react';
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from './api/axios'
import './register.css';



// 3-23 letters 
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// 1 lower case letter, 1 upper case letter, 1 digit, 1 special character 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const RegisterForm = () => {

    const userRef = useRef();
    const emailRef = useRef();
    const pwdRef = useRef();
    const matchRef = useRef();
    const errRef = useRef();

    // email
    const[email, setEmail] = useState('');
    const[validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    // userName 
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //password
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    //2nd password 
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const[errMsg, setErrMsg] = useState('');
    const[success, setSucess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

     useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(()=> {
        setErrMsg('');
        console.log(errMsg);
        // error message will clear whenever any of these change 
    }, [user, pwd, matchPwd])

    
    const handleSubmit = async (e) => {
        e.preventDefault();

    const isValidName = USER_REGEX.test(user);
    const isValidEmail = EMAIL_REGEX.test(email);
    const isValidPwd = PWD_REGEX.test(pwd);
    if (!isValidName || !isValidEmail || !isValidPwd || pwd !== matchPwd) {
        setErrMsg("Invalid Entry");
        return;
    }

    try {
        const repsponse = await axios.post('http://localhost:8000/api/auth', {
            username: user,
            password: pwd,
            email: email,
        }, {
            headers: {
                'Conent-Type': 'application/json'
            }
        
    });
        console.log(repsponse.data);
        setSucess(true);
        setUser("");
        setEmail("");
        setPwd("");
        setMatchPwd("");
    } catch (error) {
        console.error('Registration Failed:', error);
        if (error.response) {
            setErrMsg(error.response.data || "Registration Failed");
        } else {
            setErrMsg("Registration Failed: Network Error");
        }
        errRef.current.focus();
    }
};
   

return  (
        
   <section>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

    <form onSubmit={handleSubmit}>
        <label className = "Header2" htmlFor="username">Username:
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
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            aria-invalid={validName ? "false" : "true"}
        />
        <p className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters. Must begin with a letter.
        </p>

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
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            aria-invalid={validEmail ? "false" : "true"}
        />
        <p className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must be a valid email address.
        </p>

        <label htmlFor="password" className = "Header2">Password:
            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
        </label>
        <input
            className="form-input"
            id="password"
            type="password"
            ref = {pwdRef}
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            aria-invalid={validPwd ? "false" : "true"}
        />
        <p className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must include uppercase, lowercase letters, a number, and a special character (8-24 character).
        </p>

        <label htmlFor="confirm_pwd" className="Header2">Confirm Password:
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
        </label>
        <input
            className="form-input"
            id="confirm_pwd"
            type="password"
            ref = {matchRef}
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            aria-invalid={validMatch ? "false" : "true"}
        />
        <p className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Passwords must match.
        </p>
        <button className = "form-input" disabled = {!validName || !validPwd || !validMatch
            ? true: false}>Sign Up</button>
        
    </form>

   </section> 
  )
}

export default RegisterForm;