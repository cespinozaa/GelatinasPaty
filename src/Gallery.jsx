/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { slides } from './data.jsx';
import './Gallery.css';
import { Captions, Download, Fullscreen, Thumbnails } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from './Images';



function Gallery() {
  const { t } = useTranslation();

  //const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate('/Contact');
  };

  return (
    <div className="gallery">

      <h1 className="gallery__title">{t("galleryTitle")}</h1>

      <Images data = {slides} onClick={(currentIndex) => setIndex(currentIndex)}/>
      <Lightbox 
        plugins={[Download, Fullscreen, Thumbnails]} 
        captions={{
          showToggle: true,
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides = {slides} 
      />
      <div className="gallery__order">
        <p>{t("galleryDesc")}</p>
        
        <button onClick={handleOrderClick}>{t("galleryOrderButton")}</button>
        <p className="gallery__pricing">{t("galleryDesc2")}</p>
      </div>

    </div>
  )
}

export default Gallery