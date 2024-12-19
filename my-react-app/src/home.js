<<<<<<< HEAD
=======

>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom'; // Make sure to import Link
 

 
function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSideSearch, setShowSideSearch] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/search?term=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      console.log(data); // Assuming data is the array of search results
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
 

  return (
    <div className="Background">
      <h1 className="Header">RateMyPre</h1>
<<<<<<< HEAD
      
=======
      <p className="Information">
        Welcome to "Rate My Pre"! Struggling to find the right pre-workout supplement amidst a sea of options? We've got you covered! 
        Our app connects you with real reviews from fellow fitness enthusiasts who've been there, done that. Say goodbye to the guesswork and hello to performance-enhancing results that suit your specific needs. 
        Join our community today and discover the perfect pre-workout to power your fitness journey, without the hassle. Let's get pumped!
      </p>
>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2

      <div className="Content">
        <div className="SearchBubble">
          <form onSubmit={handleSearch}>
            <input
              className="SearchInput"
              type="text"
              placeholder="Find My Pre-Workout"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
      {/* Toggle text */}
          <Link to="/addPre">
            <div className="Initial-side">
              <span style={{cursor: 'pointer', color: '#FFFFFF', textDecoration: 'underline'}}>
                Can't find your Pre? Click me.
              </span>
            </div>
          </Link>
<<<<<<< HEAD
          <Link to="/login">
            <div className="Initial-side2">
              <span style={{cursor: 'pointer', color: '#FFFFFF', textDecoration: 'underline'}}>
                Create Account
              </span>
            </div>
          </Link>
=======
>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2
    </div>
    
  );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2
