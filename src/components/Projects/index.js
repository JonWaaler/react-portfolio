import React from "react";
import "./Projects.css";
let data = require('../../projects.json');

function createTagButton(tagName){
  return (
    <button className="tag">
      {tagName}
    </button>
  )
}

function createProjectDiv(project){
  return (
    <div className="project col">
      Project: {project.title}
    </div>
    )
  }
  
  function Projects() {
  return (
    <main className="bg-normal">
      <div className="main-container container">
        <h4>Tags: </h4>
        <div className="tag-container">
          {
            data.tags.map(createTagButton)
          }
        </div>

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
