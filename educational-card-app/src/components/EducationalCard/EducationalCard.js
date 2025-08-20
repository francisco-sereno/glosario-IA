import React from 'react';
import './EducationalCard.css';

/**
 * Un componente de tarjeta educativa que muestra una imagen, un título y una descripción.
 * @param {{
 *   image: string,
 *   title: string,
 *   description: string
 * }} props - Las propiedades del componente.
 */
const EducationalCard = ({ image, title, description }) => {
  return (
    <div className="edu-card">
      <div className="edu-card-image-container">
        <img src={image} alt={title} className="edu-card-image" />
      </div>
      <div className="edu-card-content">
        <h3 className="edu-card-title">{title}</h3>
        <p className="edu-card-description">{description}</p>
      </div>
    </div>
  );
};

export default EducationalCard;
