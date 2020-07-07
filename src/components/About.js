import React from 'react';

import { logos } from './projects/Lists';

function AboutMe() {
  return (
    <div id="about" className="screen">
      <div className="about-box">
        <h1>Skills</h1>

        <div className="logos">
          {logos.map((logo) => (
            <div key={logo.name} className="logo-container">
              <img className="logo" src={logo.pic} alt="" />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>

        <div className="mindset-container">
          <div className="title">
            <h2>Mindset</h2>
          </div>
          <p className="text">
            The most valuable gift is to let yourself do what you love. I have
            no doubts, that I can achieve everything I set out to do, and I can
            do it with a smile on my face.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
