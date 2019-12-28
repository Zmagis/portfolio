import React from "react";

import { logos } from "./Lists";

function AboutMe() {
  return (
    <div id="about" className="container-fluid text-center d-flex screen  ">
      <div className=" h-75 d-flex flex-column align-items-center justify-content-center projects-container about">
        <div className="">
          <h2>Skills</h2>
        </div>

        <div className="d-flex flex-wrap justify-content-center p-3 ">
          {logos.map(logo => (
            <div key={logo.name} className="m-5">
              <img className="logo" src={logo.pic} alt="" />
              <p className="pt-3">{logo.name}</p>
            </div>
          ))}
        </div>

        <div className="m-3 p-4">
          <div className="title">
            <h2>Mindset</h2>
          </div>
          <p className="p-3 text">
            The most valuable gift is to let myself do what I love. With no
            doubt I can reach everything I want wiith a positivity boost along.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
