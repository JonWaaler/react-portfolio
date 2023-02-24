import React from "react";
import LocationIcon from "../../assets/images/google-maps.png";
import data from "../../projects.json";

import "./About.css"

import Codepen from "../Codepen";
function About() {
  return (
    <>
      <svg className="appear-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#324052" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div  className="appear-top"  style={{backgroundColor: "#324052", minHeight: "300px"}}>
          <div className="about-section">
            <div className="about-title">
              <h3 style={{color: "#b8e9f1"}}>About Me</h3>
              <div className="location-tag">
                <img className="appear-top" src={ LocationIcon } />
                <h3  style={{color: "#b8e9f1", margin: "auto 0"}}>Toronto, Ontario</h3>
              </div>
            </div>
            <div className="about-desc">
              <p>
                Junior Full Stack Web Developer with 2 years of professional experience in Game Development using Unity3D and C#. 
                I started programming in highschool and later completed (with Honors) a 4 year Game Development degree at Ontario Tech University.       
              </p>
              <ol>
                <li>2 years of professional experience in Game Development using Unity3D and C#</li>
                <li></li>
              </ol>
              <li style={{listStyle: "none", display: "flex", justifyContent: "center"}}>
                <a id="resume-btn" className="nav-link rounded" target="_blank" href={data["resume-link"]} style={{width: "100px", textAlign: "center"}} >
                  Resume
                </a>
              </li>
            </div>
          </div>
        </div>
        <svg className="appear-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#324052" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  );
}

export default About;
