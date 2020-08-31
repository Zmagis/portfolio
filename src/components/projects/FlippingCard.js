import React, { useState } from 'react';

import githubLogo from '../../Images/logos/github.png';
import see from '../../Images/see.png';

function Card({ title, description, link, github, image, tech }) {
  const [descriptionClass, setDescriptionClass] = useState('description');
  const [imageClass, setImageClass] = useState('');
  const animate = () => {
    setDescriptionClass('description slide-right');
    setImageClass('slide-left');
  };
  const removeAnimation = () => {
    setDescriptionClass('description');
    setImageClass('');
  };
  return (
    <div className="card">
      <div className="image-container">
        <img className={imageClass} src={image} alt="" />
      </div>

      <div
        className={descriptionClass}
        onMouseEnter={animate}
        onMouseLeave={removeAnimation}
      >
        <div className="description-inner">
          <h3 className="title">{title}</h3>
          <p>
            <i>{tech}</i>
          </p>
          <p>{description}</p>
          <div className="card-links">
            <a href={github} target="blank">
              <i class="fab fa-github fa-2x"></i>
            </a>

            {link === '' ? null : (
              <a href={link} target="blank">
                <img src={see} alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
