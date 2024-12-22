import React, { useState, useEffect } from 'react';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home";
import Card from './Home/Card/Card';
import ArtDetails from './Home/Card/ArtDetails';
import About from './About/About';
import Contact from './Contact/Contact';
import Asesorias from './Asesorias/Asesorias';
import AdminDashboard from './AdminDashboard/AdminDashboard';

const Main = () => {

  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/categoria/:cat_id" element={<Card />} />
        <Route path="/articulo/:id" element={<ArtDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/asesorias" element={<Asesorias />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>

    </div>
  );
};

export default Main; 

