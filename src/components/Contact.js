import React from 'react';
import Roll from 'react-reveal/Roll';

function Contact() {
  return (
    <div id="contact" className="screen">
      <div className="contact">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <Roll cascade>
          <p className="text contact-text">Email: eglegustaite@gmail.com</p>
        </Roll>
      </div>
    </div>
  );
}

export default Contact;
