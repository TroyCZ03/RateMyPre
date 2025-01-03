import React, { useState, useRef, useEffect} from 'react';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './addPre.css';

const UPC_REGEX = /^\d{12}$/;
const RATING_REGEX = /^(10|[1-9])$/;

function AddPreWorkoutForm() {
  

    const ratingRef = useRef();
    const upcRef = useRef();
    const errRef = useRef();

    const[rating, setRating] = useState('');
    const[validRating, setValidRating] = useState('');
    const[ratingFocus, setRatingFocus] = useState(false);

    const[UPC_code, setUPC_code] = useState('');
    const[valid_UPC_code, setValidUPC_code] = useState('');
    const[UPC_codeFocus, setUPC_codeFocus] = useState(false);


    const[errMsg, setErrMsg] = useState('');
    const[success, setSucess] = useState(false);

    // HOOKS 
    useEffect(() => {
      upcRef.current.focus();
    },[])

    useEffect(() => {
      setValidRating(RATING_REGEX.test(rating));
    }, [rating]) 
    useEffect(() => {
      setValidUPC_code(UPC_REGEX.test(UPC_code));
    }, [UPC_code]) 

    useEffect(()=> {
            setErrMsg('');
            console.log(errMsg);
            // if error message set to display it will clear again if these fields change 
        }, [rating, UPC_code])

  


      const handleSubmit = async (e) => { 
              e.preventDefault();
        /// TODO set up back end, and
              const isValidUPC = UPC_REGEX.test(UPC_code);
              const isValidRating = RATING_REGEX.test(rating);

              if(!isValidRating || isValidUPC) {
                setErrMsg("Invalid Entry");
                return;
              }
               
       }
  
    
  
  
  return (
   <section>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSubmit}>
        <label className = "Header1" htmlFor = "UPC_code">UPC_CODE </label>
          <input
            className = "form-input"
            id = "UPC_code"
            type = "text"
            ref = {upcRef}
            autoComplete = "off"
            placeholder="Enter 12-digit UPC code"
            onChange = {(e) => setUPC_code(e.target.value)}
            onFocus = {() => setUPC_codeFocus(true)}
            onBlur = {() => setUPC_codeFocus(false)}
            aria-invalid={valid_UPC_code ? "false" : "true"}
            aria-describedby="upcHelp"
            />
            <p id = "upcHelp" className = {"instructionsAP" }>
              <FontAwesomeIcon icon = {faInfoCircle}/>
      A UPC Code is a **12-digit numeric code** usually found below a barcode on product packaging.

            </p>
          <label className = "Header1" htmlFor = "rating">Rating </label>
            <input
              className = "form-input"
              id = "rating"
              type = "number"
              ref = {ratingRef}
              autoComplete = "off"
              placeholder = "Rating 1-10"
              onChange={(e) => setRating(e.target.value)}
              onFocus = {() => setRatingFocus(true)}
              onBlur = {() => setRatingFocus(false)}
              aria-invalid={validRating ? "false" : "true"}
              aria-describedby="ratingHelp"
            />
          <p id = "ratingHelp" className = "instructionsAP">
              <FontAwesomeIcon icon = {faInfoCircle}/>
              Must be a number 1-10
          </p>

          <button className = {!validRating || !valid_UPC_code ? "hide" : "form-button-addPre"}
          >
            Add Pre Wokrout
          </button>

      </form>

   </section>
  );
}

export default AddPreWorkoutForm;
