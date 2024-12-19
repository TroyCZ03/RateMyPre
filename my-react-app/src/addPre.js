import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './addPre.css'; // Ensure this file contains the updated CSS styles

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
<<<<<<< HEAD
     // add price per serving and serving 
=======

>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'rating') {
            const validRating = Math.max(0, Math.min(10, Number(value))); // Cast to Number to ensure math operations are correct
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
            <h2 className="header header--large">Add New Pre-Workout</h2>
            <h3 className="header header--medium">Common Ingredients</h3>
             

            <form className="formatted-form" onSubmit={handleSubmit}>
                {Object.entries(formData).filter(([key]) =>
                    !['name', 'flavor', 'price', 'rating'].includes(key)
                ).map(([key, value]) => (
                    <input
                        key={key}
                        className="form-input"
                        type="number"
                        value={value}
                        onChange={handleChange}
                        name={key}
                        placeholder={`${key.replace(/_/g, ' ')} (mg)`}
                    />
                ))}
                <button className="nice-button" type="submit">Add Pre-Workout</button>
            </form>
            <h4 className= "header header--small">Necessary Components</h4>
            <form className="formatted-form" onSubmit={handleSubmit}>
                <input className="form-input" type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Name" />
                <input className="form-input" type="text" value={formData.flavor} onChange={handleChange} name="flavor" placeholder="Flavor" />
                <input className="form-input" type="number" value={formData.price} onChange={handleChange} name="price" placeholder="Price" />
                <input className="form-input" type="number" value={formData.rating} onChange={handleChange} name="rating" placeholder="Rating" />
            </form>

            <Link to="/">
                <div className="return-home1">Home Page</div>
            </Link>
        </div>
    );
}

export default AddPreworkout;
