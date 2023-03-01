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
    <div className="project" key={project.title}>
      {/* Title */}
      <h2>{project.title}</h2>

      {/*  */}
      <div>

        {/* Section1 - Image */}
        <a href={`${project.website}`} target="_blank"  rel="noreferrer">
          <img src={project.imageURI} alt="project page"></img>
        </a>

        {/* Section2 -  */}
        <div className="">
          {/* Tags */}
          <h5>Technologies</h5>
          <ul className="tags container-lg">
            <li className="tag" style={{borderColor: "#26c148"}}>Host: <strong>{project.liveOn}</strong></li>
            {
              project.tags.map(createProjectTags)
            }
          </ul>
          {/*  */}
          <h5>Description</h5>
          <p className="container-fluid">
            { project.description }
          </p>

          {/* Button links */}
          <div className="links">
            <a href={`${project.github}`} target="_blank"  rel="noreferrer">
              <button className="btn btn-secondary">
                View Source
                <svg style={{margin: "2px 4px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </button>
            </a>
            <a href={`${project.website}`} target="_blank" rel="noreferrer">
              <button className="btn btn-secondary">Live Demo
                 <svg className="live-demo" xmlns="http://www.w3.org/2000/svg" version="1.0" width="24" height="24" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet">
                    <g  className="live-demo" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                    <path d="M33 622 c-27 -17 -33 -70 -33 -301 0 -265 5 -294 52 -310 41 -15 495 -15 536 0 47 16 52 45 52 310 0 231 -6 284 -33 301 -16 10 -558 10 -574 0z m565 -79 l3 -53 -280 0 -281 0 0 48 c0 27 3 52 7 55 4 4 128 6 277 5 l271 -3 3 -52z m2 -288 c0 -192 -1 -205 -19 -215 -26 -14 -496 -14 -522 0 -18 10 -19 23 -19 215 l0 205 280 0 280 0 0 -205z"/>
                    <path d="M83 548 c2 -7 10 -13 17 -13 7 0 15 6 18 13 2 7 -5 12 -18 12 -13 0 -20 -5 -17 -12z"/>
                    <path d="M163 548 c2 -7 10 -13 17 -13 7 0 15 6 18 13 2 7 -5 12 -18 12 -13 0 -20 -5 -17 -12z"/>
                    <path d="M152 300 c-30 -28 -30 -82 0 -110 27 -25 118 -29 118 -5 0 11 -11 15 -43 15 -47 0 -67 13 -67 45 0 32 20 45 67 45 32 0 43 4 43 15 0 24 -91 20 -118 -5z"/>
                    <path d="M370 305 c0 -11 11 -15 43 -15 47 0 67 -13 67 -45 0 -32 -20 -45 -67 -45 -32 0 -43 -4 -43 -15 0 -24 91 -20 118 5 30 28 30 82 0 110 -27 25 -118 29 -118 5z"/>
                    <path d="M260 245 c0 -12 13 -15 60 -15 47 0 60 3 60 15 0 12 -13 15 -60 15 -47 0 -60 -3 -60 -15z"/>
                    </g>
                  </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
function Projects() {
  return (
    <main className="bg-normal">
      <div className="projects container-lg" style={{minHeight: "100vh"}}>
        {
          data.projects.map(createProjectDiv)
        }
      </div>
    </main>
  );
}

export default Projects;
