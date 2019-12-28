// import heart from "../Images/zmagis.JPG";
import Lust from "../Images/projects/Lust.png";
import Chat from "../Images/projects/chat.png";
import QuoteMachine from "../Images/projects/Qoute.png";

import html from "../Images/logos/html.png";
import css from "../Images/logos/css.png";
import js from "../Images/logos/js.png";
import react from "../Images/logos/react.png";
import redux from "../Images/logos/redux.png";
import bootstrap from "../Images/logos/bootstrap.png";
import gimp from "../Images/logos/gimp.png";
import sass from "../Images/logos/sass.png";

export const list = [
  {
    id: 3,
    name: "Lust",
    description: "Hungry? Search for the best place to eat!",
    img: Lust,
    link: "https://epic-benz-b2d8fe.netlify.com/",
    github: "https://github.com/Zmagis/Lust"
  },
  {
    id: 2,
    name: "Chat App",
    description:
      "Chating app created with ReactJS, Redux and WebSocket. Unfortunately netlify does not support full functionality.",
    img: Chat,
    link: "https://quirky-raman-c8d89f.netlify.com/",
    github: "https://github.com/Zmagis/chat"
  },
  {
    id: 1,
    name: "Quote Machine",
    description: "Feed your soul with random quotes.",
    img: QuoteMachine,
    link: "https://nervous-kirch-642b5a.netlify.com",
    github: "https://github.com/Zmagis/Qoute-Machine-"
  }
];

export const logos = [
  { name: "HTML", pic: html },
  { name: "CSS", pic: css },
  { name: "SASS", pic: sass },
  { name: "BOOTSTRAP", pic: bootstrap },
  { name: "JS", pic: js },
  { name: "REACT", pic: react },
  { name: "REDUX", pic: redux },
  { name: "GIMP", pic: gimp }
];
