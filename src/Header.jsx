/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';


function Header() {
  const { t } = useTranslation();

  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  
  //only show nav bar if mobile
  const handleShowNavbar = () => {
    if(isMobile){
      setShowNavbar(!showNavbar);
    }
  };

  const handleHomeClick = () => {
    setShowNavbar(false);
  }

  // Effect to manage body overflow
  useEffect(() => {
    console.log(showNavbar)
    if (showNavbar && isMobile) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
      
    // Clean up function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showNavbar, isMobile]);

  //handling window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <div className="header">
      <div className="container">
        <div className="lang">
          <LanguageSelector />
        </div>
      
          <div className='header__main'>
            <Link to="/" onClick={handleHomeClick}>GP</Link>
          </div>
        
          <div className="menu" onClick={handleShowNavbar}>
            <MenuIcon fontSize="large"/>
          </div>

          <div className={`header__elements ${showNavbar ? 'active' : ''}`}>

            <ul>
            <li className="header__option">
               <Link to="/" onClick={handleShowNavbar}>{t("headerOption1")}</Link>
              </li>
              <li className="header__option">
               <Link to="/Gallery" onClick={handleShowNavbar}>{t("headerOption2")}</Link>
              </li>
              <li className="header__option">
               <Link to="/About" onClick={handleShowNavbar}>{t("headerOption3")}</Link>
              </li>
              <li className="header__option">
               <Link to="/Contact" onClick={handleShowNavbar}>{t("headerOption4")}</Link>
              </li>
            </ul>

          </div>
      </div>
    </div>
  )
}

export default Header