import React from 'react';
import '../../GeneralStyles/App.css';

function SearchForm({ searchTerm, setSearchTerm, onSearch }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm); // Pass the search term to the parent handler
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="SearchInput"
                type="text"
                placeholder="Find My Pre-Workout"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    );
}

export default SearchForm;
