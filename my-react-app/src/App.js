import React from 'react';
import { useRef } from 'react';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import AddPreworkout from './addPre';
import Navbar from './navbar'; // Make sure the path is correct

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* This adds the navbar to every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPre" element={<AddPreworkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
