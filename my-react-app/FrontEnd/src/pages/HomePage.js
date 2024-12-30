import React, { useState } from 'react';
import '../GeneralStyles/App.css';
import { Link } from 'react-router-dom';
import SearchForm from '../components/Search/SearchForm'; // Import the reusable form component

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (term) => {
        try {
            const response = await fetch(`http://localhost:3001/search?term=${encodeURIComponent(term)}`);
            const data = await response.json();
            console.log(data); 
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    return (
        <div className="Background">
            <h1 className="Header">RateMyPre</h1>

            <div className="Content">
                <div className="SearchBubble">
                    <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
                </div>
            </div>

            <Link to="/addPre">
                <div className="Initial-side">
                    <span style={{ cursor: 'pointer', color: '#FFFFFF', textDecoration: 'underline' }}>
                        Can't find your Pre? Click me.
                    </span>
                </div>
            </Link>

            <Link to="/register">
                <div className="Initial-side2">
                    <span style={{ cursor: 'pointer', color: '#FFFFFF', textDecoration: 'underline' }}>
                        Login or Register 
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default HomePage;
