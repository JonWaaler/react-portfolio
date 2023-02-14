import React from "react";
import "./Projects.css";
let data = require('../../projects.json');

function createProjectTags(projectTags) {
  return (
    <li className="tag">
      {projectTags}
    </li>
  )
}

function createProjectDiv(project){
  return (
    <div className="project col" key={project.title}>
      <div className="row">
        <a href="" target="_blank">
          <img src={project.imageURI}></img>
        </a>
      </div>
      <div className="row" >
        <h3>Project: {project.title}</h3>

        <ul className="tag-list tag-container">
          {
            project.tags.map(createProjectTags)
          }
        </ul>

        <a href={`${project.github}`} target="_blank">
          <button>View Source</button>
        </a>
        <a href={`${project.website}`} target="_blank">
          <button className="">Live Demo</button>
        </a>

      </div>
    </div>
    )
  }
  
function Projects() {
  return (
    <main className="bg-normal">
      <div className="main-container container">
        <div className="container row">
          {
            data.projects.map(createProjectDiv)
          }
        </div>
      </div>

      <div className="main-container container">
        
      </div>
    </main>
  );
}

export default Projects;
