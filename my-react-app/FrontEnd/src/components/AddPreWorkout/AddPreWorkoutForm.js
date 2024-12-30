import React, { useState } from 'react';
import './addPre.css';

function AddPreWorkout() {
  const [formData, setFormData] = useState({
    //name: '',
    UPC_code: '',
    rating: '',
  });


  const fieldHandlers = {
    rating: (value) => Math.max(1, Math.min(10, Number(value))),
    UPC_code: (value) => value.replace(/\D/g, ''),
    name: (value) => value.trim(),
    };

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevState) => ({
    ...prevState,
    [name]: fieldHandlers[name] ? fieldHandlers[name](value) : value,
     }));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Pre-workout form submitted! (Server interaction removed)');
    console.log('Form Data:', formData);
  };

  return (
    <div className="New-Background">
      <form className="formatted-form" onSubmit={handleSubmit}>
        
       

        <label htmlFor="upc-input" className="header header-small">
          Enter the UPC code
          <div className="header header-small">
            found below product barcode
          </div>
        </label>
        <input
          id="upc-input"
          className="form-input"
          type="string "
          value={formData.UPC_code}
          onChange={handleChange}
          name="UPC_code"
          placeholder="UPC CODE"
        />

        <input
          className="form-input"
          type="number"
          value={formData.rating}
          onChange={handleChange}
          name="rating"
          placeholder="Rating (1-10)"
        />

        <button className="nice-button" type="submit">
          Add Pre-Workout
        </button>
      </form>
    </div>
  );
}

export default AddPreWorkout;
