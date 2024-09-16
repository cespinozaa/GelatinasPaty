/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';

import Header from './Header.jsx';
import Products from './products.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Gallery from './Gallery.jsx';



function App() {
  const { t } = useTranslation();

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  // Window Dimensions Tracking Function : getCurrentDimension() retrieves the current window width and height.
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  // Window Resize Listener using useEffect : useEffect updates screenSize on window resize, ensuring responsiveness.
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);



  return (
    <>
     
      {/* Main Content */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main__page">
              <div className="background-container">
                <div className="app">
                  <h1 className="main__title">Gelatinas Paty</h1>
                </div>
                <div className="card">
                  <p className="main__desc">
                    {t("mainDesc")}
                  </p>
             
                </div>
                <p className="main__desc2">{t("subtitle")}</p>
              </div>
              <Products />
            </div>
          }
        />
        
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App
