import React from 'react';
import { useRef } from 'react';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import AddPreworkout from './addPre';
<<<<<<< HEAD
import Login from './login'
=======
>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2
import Navbar from './navbar'; // Make sure the path is correct

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* This adds the navbar to every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPre" element={<AddPreworkout />} />
<<<<<<< HEAD
        <Route path = "/login" element={<Login />} />
=======
>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2
      </Routes>
    </BrowserRouter>
  );
}

export default App;
