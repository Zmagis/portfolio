import React from "react";

import me from "../Images/egle.jpg";
import rightL from "../Images/rightL.jpg";
import rightS from "../Images/rightS.jpg";
import leftL from "../Images/leftL.jpg";
import leftS from "../Images/leftS.jpg";

function Greeting() {
  return (
    <div
      id="greeting"
      className="container-fluid text-center d-flex align-items-center justify-content-center  screen "
    >
      <div className="">
        <h2 className="mb-3">Front-end developer</h2>

        <img className="round-photo2 img-responsive m-5" src={leftS} alt="" />
        <img className="round-photo1 img-responsive m-5" src={leftL} alt="" />
        <img className="round-photo img-responsive m-5" src={me} alt="" />
        <img className="round-photo1 img-responsive m-5" src={rightL} alt="" />
        <img className="round-photo2 img-responsive m-5" src={rightS} alt="" />

        <p className="m-auto w-50">
          I'm a self-taught front-end developer and I'm looking for
          opportunities to get out of my comfort zone. React JavaScript is where
          I have spent most of my time but I'm always eager to learn new
          technologies.
        </p>
      </div>
    </div>
  );
}

export default Greeting;
