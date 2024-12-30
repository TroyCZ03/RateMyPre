import React from 'react';
import { Link } from 'react-router-dom';
import AddPreWorkoutForm from '../components/AddPreWorkout/AddPreWorkoutForm.js'; 
import '../components/AddPreWorkout/addPre.css';


function AddPreworkoutPage({}) {
    return (
        <div className="New-Background">
            <h1 className="header header--large">Add a New Pre-Workout!</h1>
            
            {/* Reusable form */}
            <AddPreWorkoutForm />
            
            <Link to="/">
                <div className="return-home1">Home Page</div>
            </Link>
        </div>
    );
}

export default AddPreworkoutPage;
