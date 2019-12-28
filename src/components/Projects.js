import React from "react";
import Card from "./FlippingCard";

import { list } from "./Lists";

function Projects() {
  console.log(window.innerWidth);

  return (
    <div id="projects" className="container-fluid text-center d-flex screen ">
      <div className="w-85 h-75 d-flex flex-column align-items-center justify-content-center projects-container">
        <div className="mb-4">
          <h2>Projects</h2>
        </div>

        <div className="d-flex flex-wrap">
          {list.map(project => (
            <div className="">
              <Card
                key={project.id}
                title={project.name}
                image={project.img}
                description={project.description}
                github={project.github}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
