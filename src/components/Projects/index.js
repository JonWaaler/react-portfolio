import React from "react";
import "./Projects.css";
let data = require('../../projects.json');

function createTagButton(tagName){
  return (
    <button className="tag" key={tagName}>
      {tagName}
    </button>
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
        <h1>Project: {project.title}</h1>
      </div>
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
