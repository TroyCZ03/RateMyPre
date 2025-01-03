import React from 'react';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AddPreWorkout from './pages/AddPreWorkoutPage.js';
import Register from './pages/RegisterPage.js'
import Login from './pages/LoginPage.js'
import Navbar from './navbar'; // Make sure the path is correct

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* This adds the navbar to every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPre" element={<AddPreWorkout />} />
        <Route path = "/register" element={<Register />} />
         <Route path = "/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
