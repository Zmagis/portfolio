import React from 'react';

import './styles/styles.css';
import Nav from './components/navabr';
import Greeting from './components/home/Greetin';
import Projects from './components//projects/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav />
      <Greeting />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
