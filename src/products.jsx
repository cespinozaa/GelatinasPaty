/* eslint-disable no-unused-vars */
import React from 'react'
import './products.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fresas from './pictures/IMG3_2.JPEG';
import flan from './pictures/IMG36_1.JPG';
import gel from './pictures/IMG35_1.jpg';


function Products() {
  const { t } = useTranslation()
 
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate('/Contact');
  };

    return (
      <div className="products">
        <p className="products__title">
            {t("productsTitle")}
        </p>

        <div className="gelatin__row">
            <div className = "gelatin__column">
               <img src={gel} alt="gelatina" /> 
               <p className="image__desc">Gelatinas</p>
            </div>
            
            <div className = "gelatin__column">
               <img src={fresas} alt="fresas"/> 
               <p className="image__desc">Fresas Con Crema</p>
            </div>

            <div className = "gelatin__column">
               <img src={flan} alt="flan" /> 
               <p className="image__desc">Chocoflan</p>
            </div>
        </div>
        <button onClick={handleOrderClick}>{t("servicesContactButton")}</button>
        <div className="services">
        
            <h1 className="services__title">{t("servicesTitle")}</h1>
            <div className="services__row">
                <div className="services__column">
                    <h1 className="services__subtitle">Gelatinas</h1>
                    <span className="services__desc">{t("servicesGelatinas")} 
                        <br/>
                    </span>
                    <span className="services__prices">{t("gelatinasPrice1")}</span>
                    <span className="services__prices">{t("gelatinasPrice2")}</span>
                    <span className="services__prices">{t("gelatinasPrice3")}</span>
                    <span className="services__prices">{t("gelatinasPrice4")}</span>
                    <span className="services__prices">{t("gelatinasPrice5")}</span>
                    <span className="services__prices">{t("gelatinasPrice6")}</span>
                    <span className="services__prices">{t("gelatinasPrice7")}</span>
                    <span className="services__prices">{t("gelatinasPrice8")}</span>
                    <span className="services__prices">{t("gelatinasPrice9")}</span>
                </div>

                <div className="services__column">
                    <h1 className="services__subtitle">Fresas Con Crema</h1>
                    <span className="services__desc">{t("servicesFresas")} 
                        <br/>
                    </span>
                    <span className="services__prices">{t("fresasPrice")}</span>
                </div>
            </div>
            <div className="services__row">
                <div className="services__column">
                    <h1 className="services__subtitle">Chocoflan</h1>
                    <span className="services__desc">{t("servicesChocoflan")}
                        <br/>
                    </span>
                    <span className="services__prices">{t("flanPrice1")}</span>
                    <span className="services__prices">{t("flanPrice2")}</span>
                    <span className="services__prices">{t("flanPrice3")}</span>
                </div>

                <div className="services__column">
                    <h1 className="services__subtitle">{t("servicesPlaceholder")}</h1>
                    <span className="services__desc"> {t("servicesPlaceholderDesc")}
                    </span>
                </div>
            </div>
        </div>
            <footer>
                <p>© {new Date().getFullYear()} Cynthia Espinoza-Arredondo. All Rights Reserved.</p>
            </footer>
      </div>
    )
  }
  
  export default Products