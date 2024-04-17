import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="hidden"><Link to="/">Home</Link></li>
        <li className="hidden"></li>
      </ul>
    </nav>
  );
}

export default Navbar;
