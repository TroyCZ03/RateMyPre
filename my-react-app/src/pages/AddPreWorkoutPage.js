import React from 'react';
import { Link } from 'react-router-dom';
import AddPreWorkoutForm from '../components/AddPreWorkout/AddPreWorkoutForm.js'; 
import '../components/AddPreWorkout/addPre.css';


function AddPreworkoutPage({}) {
    return (
        <div className="New-Background">
            <h2 className="header header--large">Add New Pre-Workout</h2>
            <h3 className="header header--medium">Common Ingredients</h3>
            
            {/* Reusable form */}
            <AddPreWorkoutForm />
            
            <Link to="/">
                <div className="return-home1">Home Page</div>
            </Link>
        </div>
    );
}

export default AddPreworkoutPage;
