import React from "react";
import Fade from "react-reveal/Fade";

import me from "../Images/egle-min.jpg";
import rightL from "../Images/rightL-min.jpg";
import rightS from "../Images/rightS-min.jpg";
import leftL from "../Images/leftL-min.jpg";
import leftS from "../Images/leftS-min.jpg";

function Greeting() {
  return (
    <div
      id="greeting"
      className="container-fluid text-center d-flex align-items-center justify-content-center  screen "
    >
      <div className="">
        <Fade duration={5000}>
          <h2 className="mb-3 greeting-title">Front-end Web Developer</h2>
        </Fade>

        <div className="">
          <img className="round-photo2 img-responsive m-5" src={leftS} alt="" />

          <img className="round-photo1 img-responsive m-5" src={leftL} alt="" />

          <img className="round-photo img-responsive m-3" src={me} alt="" />

          <img
            className="round-photo1 img-responsive m-5"
            src={rightL}
            alt=""
          />

          <img
            className="round-photo2 img-responsive m-5"
            src={rightS}
            alt=""
          />
        </div>
        <Fade duration={5000}>
          <p className="m-auto greeting-text" style={{ letterSpacing: "2px" }}>
            Hi! I'm Eglė, passionate, self-driven, self-taught front-end web
            developer. Always eager to learn new cutting edge technologies to
            create and find the most efficient solution.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Greeting;
