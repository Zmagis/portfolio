import React from 'react';
import Fade from 'react-reveal/Fade';

import Title from './Title';

function Greeting() {
  return (
    <div id="greeting" className="screen">
      <div className="greeting-position">
        <Title />

        <Fade duration={5000} delay={1800}>
          <p>
            Hi! I'm Eglė, passionate, self-driven, self-taught front-end
            developer. Always eager to learn new cutting edge technologies to
            create and find the most efficient solution.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Greeting;
