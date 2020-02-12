import React from "react";

import githubLogo from "../../Images/logos/github.png";
import see from "../../Images/see.png";

function Card({ title, description, link, github, image }) {
  return (
    <div className="p-2 card ">
      <div className=" flip-card">
        <div className=" flip-card-inner">
          <div className="front">
            <img className="projectImg" src={image} alt="" />
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center back">
            <h5 className="mb-3">{title}</h5>
            <p className="">{description}</p>
            <div className="block">
              <a href={github} target="blank">
                <img src={githubLogo} alt="github logo" className=" link" />
              </a>
              <a href={link} target="blank">
                <img src={see} alt="" className="link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
