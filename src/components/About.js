import React from 'react';

import { logos } from './projects/Lists';

function AboutMe() {
  return (
    <div id="about" className="container-fluid text-center d-flex screen  ">
      <div className=" h-75 d-flex flex-column align-items-center justify-content-center projects-box about">
        <div className="">
          <h2>Skills</h2>
        </div>

        <div className="logos-container">
          {logos.map((logo) => (
            <div key={logo.name} className="logo-container">
              <img className="logo" src={logo.pic} alt="" />
              <p className="pt-2">{logo.name}</p>
            </div>
          ))}
        </div>

        <div className="m-2 p-2">
          <div className="title">
            <h3>Mindset</h3>
          </div>
          <p className="p-3 text">
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
