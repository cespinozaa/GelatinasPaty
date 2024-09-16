/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Images.css';

const Images = (props) => {
 const { data, onClick } = props;

 const handleClickImage = (index) => {
    onClick(index)
 }

  return (
    <div className='images__container'>
    {data.map((slide, index) => (
        <div onClick={() => handleClickImage(index)} key = {index} className='image'>
            <img src={slide.src} alt={slide.description} />
        </div>
    ))}
    </div>
  );
};

Images.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            title: PropTypes.string,
            description: PropTypes.string
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Images;