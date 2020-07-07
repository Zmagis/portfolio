import React from 'react';

import githubLogo from '../../Images/logos/github.png';
import see from '../../Images/see.png';

function Card({ title, description, link, github, image, tech }) {
  return (
    <div>
      <div className=" flip-card">
        <div className=" flip-card-inner">
          <div className="front">
            <img className="projectImg" src={image} alt="" />
          </div>

          <div className="back">
            <h3 className="title">{title}</h3>
            <p>{description}</p>
            <p>
              <i>{tech}</i>
            </p>
            <div className="block">
              <a href={github} target="blank">
                <img src={githubLogo} alt="github logo" className=" link" />
              </a>
              {link === '' ? null : (
                <a href={link} target="blank">
                  <img src={see} alt="" className="link" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
