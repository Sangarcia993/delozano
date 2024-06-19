import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import Footer from './components/Footer.js';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/services' element={ <Services />}></Route>
        <Route path='/products' element={ <Products />}></Route>
      </Routes> 
      <Footer />  
    </Router>
    <SpeedInsights />
    <Analytics />
    </>
      
   
  );
}

export default App;
