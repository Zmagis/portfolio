import React from "react";
import Card from "./FlippingCard";

import { list } from "./Lists";

function Projects() {
  return (
    <div
      id="projects"
      className="container-fluid text-center d-flex project-container "
    >
      <div className="w-85 h-75 d-flex flex-column align-items-center justify-content-center projects-box">
        <div className="mb-4">
          <h2>Projects</h2>
        </div>

        <div className="d-flex flex-wrap align-items-center justify-content-center projects">
          {list.map(project => (
            <div key={project.id} className="">
              <Card
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
