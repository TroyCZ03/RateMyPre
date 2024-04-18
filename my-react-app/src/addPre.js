import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './addPre.css';

function AddPreworkout() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    flavor: '',
    caffeine: '',
    l_citrulline: '',
    beta_alanine: '',
    bcaas: '',
    creatine_monohydrate: '',
    beetroot_extract: '',
    pomegranate_extract: '',
    l_glutamine: '',
    vasodilators: '',
    vitamin_b: '',
   });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rating') {
      const validRating = Math.max(0, Math.min(10, value)); // Ensure rating is between 0 and 10
      setFormData(prevState => ({
        ...prevState,
        [name]: validRating
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/add-preworkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      alert('Pre-workout added successfully!');
    } catch (error) {
      console.error('Failed to add pre-workout:', error);
      alert('Failed to add pre-workout.');
    }
  };

  return (
    <div className="New-Background">
      <h2 className="Header1">Add New Pre-Workout</h2>
      <h3 className="Header3">Common Ingredients</h3>
      <div className="center-container">
        <h4 className="Header4">Necessary Components</h4>
      </div>
 
      <form className="fomatted-form" onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) =>
          key !== 'name' && key !== 'flavor' && key !== 'price' && key !== 'rating' ? (
            <input
              key={key}
              className="formInput"
              type="number"
              value={value}
              onChange={handleChange}
              name={key}
              placeholder={`${key.replace(/_/g, ' ')} (${key === 'rating' ? '' : 'mg'})`}
            />
          ) : null
        )}
        <button className="niceButton" type="submit">Add Pre-Workout</button>
      </form>

      <form className="formattedform2" onSubmit={handleSubmit}>
        <input className="formInput2" type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Name" />
        <input className="formInput2" type="text" value={formData.flavor} onChange={handleChange} name="flavor" placeholder="Flavor" />
        <input className="formInput2" type="number" value={formData.price} onChange={handleChange} name="price" placeholder="Price" />
        <input className="formInput2" type="number" value={formData.rating} onChange={handleChange} name="rating" placeholder="Rating" />
      </form>

      <Link to="/">
        <div className="return-home">
          <span style={{cursor: 'pointer', color: '#00F', textDecoration: 'underline'}}>Home Page</span>
        </div>
      </Link>
    </div>
  );
}

export default AddPreworkout;
