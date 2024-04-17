import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './addPre.css';

function AddPreworkout() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [flavor, setFlavor] = useState('');
  const [caffeine, setCaffeine] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const preworkout = { name, price, flavor, caffeine };
    try {
      const response = await fetch('http://localhost:3001/add-preworkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(preworkout)
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add New Pre-Workout</h2>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
        <input type="text" value={flavor} onChange={e => setFlavor(e.target.value)} placeholder="Flavor" />
        <input type="number" value={caffeine} onChange={e => setCaffeine(e.target.value)} placeholder="Caffeine (mg)" />
        <button type="submit">Add Pre-Workout</button>
      </form>
      {/* Toggle text */}
      <Link to="/">
        <div className="return-home">
          <span style={{cursor: 'pointer', color: '#00F', textDecoration: 'underline'}}>
            Home Page
          </span>
        </div>
      </Link>
    </div>
  );
}

export default AddPreworkout;
