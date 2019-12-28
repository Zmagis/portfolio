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

        <p className="mt-2 ml-5 mr-5">
          Mostly I have focused on React JavaScript but I'm eager to get out of
          my comfort zone and learn more! Check out my projects!
        </p>
      </div>
    </div>
  );
}

export default Greeting;
