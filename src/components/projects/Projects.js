import React from 'react';
import Card from './FlippingCard';

import { list } from './Lists';

function Projects() {
  return (
    <div id="projects" className="">
      <div className=" projects-box">
        <h2>Projects</h2>

        <div className=" projects">
          {list.map((project) => (
            <Card
              key={project.id}
              title={project.name}
              image={project.img}
              description={project.description}
              tech={project.tech}
              github={project.github}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
