import React from "react";

import "./styles/styles.css";
import Nav from "./components/navabr";
import Greeting from "./components/Greetin";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="fluid-conainer">
      <Nav />
      <Greeting />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
