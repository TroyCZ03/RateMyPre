import React, { useState } from 'react';
import './App.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here, for now we'll just log the term
    console.log(searchTerm);
  };
      // <img className = "Image"src=  "pre-image.webp" alt = "pre-workouts"></img>

  return (
    <div className="Background">
      <h1 className = "Header">RateMyPre </h1>
      <p className = "Information">
        Welcome to "Rate My Pre"! Struggling to find the right pre-workout supplement amidst a sea of options? We've got you covered! 
        Our app connects you with real reviews from fellow fitness enthusiasts who've been there, done that. Say goodbye to the guesswork and hello to performance-enhancing results that suit your specific needs. 
        Join our community today and discover the perfect pre-workout to power your fitness journey, without the hassle. Let's get pumped!
      </p>
       <div className="Content">
        <div className="SearchBubble">
          <form onSubmit={handleSearch}>
            <input
              className="SearchInput"
              type="text"
              placeholder="Enter Pre-Workout"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              
              
            />
            <button type="submit" className="SearchButton">
            <FaArrowAltCircleRight/> {/* This is the search icon */}

            </button>
        

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
