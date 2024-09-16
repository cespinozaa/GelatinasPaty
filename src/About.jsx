/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './About.css';
import gto from './pictures/guanajuato.jpg'

function About() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate('/Contact');
  };

  return (
    <div className="about">
      <div className="about__content">
        <div className="about__left">
          <h1 className="about__title">{t("aboutTitle")}</h1>
          <div className="about__info">
          {t("aboutDesc")}
          </div>
          <button onClick={handleOrderClick}>{t("aboutContactButton")}</button>
        </div>
        <div className="about__right">
          <img src={gto} alt="guanajuato" className="about__pic"/>
        </div>

      </div>
      
    </div>
  )
}

export default About