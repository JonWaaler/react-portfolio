import React from "react";
import LocationIcon from "../../assets/images/google-maps.png";
import data from "../../projects.json";

import "./About.css"

function About() {
  return (
    <>
      <svg className="appear-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#324052" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div  className="appear-top"  style={{backgroundColor: "#324052"}}>
          <div className="about-section">
            {/* My Location */}
            <div className="location-tag">
              <img className="appear-top" style={{width: "24px", height: "24px"}} src={ LocationIcon } alt="Location Icon"/>
              <h3  style={{color: "#b8e9f1", margin: "auto 0"}}>Toronto, Ontario</h3>
            </div>

            {/* Intro paragraph */}
            <h3 className="about-title" style={{color: "#b8e9f1"}}>About Me</h3>
            <div className="about-desc">
              <p>
              As a <strong style={{color: "whitesmoke"}}>full-stack web developer</strong>, I am passionate about creating engaging and intuitive user experiences on the web. With <strong style={{color: "whitesmoke"}}>2 years of experience</strong> in game development, I bring a unique perspective to my work and am always exploring new technologies and approaches to stay ahead of the curve.
              </p>
              <p>
              My colleagues have recognized me for my self-motivation and dedication to delivering high-quality work on every project I undertake. I have extensive experience with a range of technologies, including HTML, CSS, JavaScript, React, ASP.NET, Razor Pages, Express, SQL, and MongoDB, and am always eager to expand my skillset.
              </p>
              <p>
              Whether I'm working on a large-scale project or a small personal website, I strive to create elegant and effective solutions that meet the unique needs of each client or user.
              </p>
            </div>

            {/* Technologies list */}
            <h3 style={{color: "#b8e9f1", marginTop: "40px"}}>Technologies</h3>
            <ul className="tags" style={{paddingLeft: "12px"}}>
              <li className="tag">HTML</li>
              <li className="tag">CSS</li>
              <li className="tag">JavaScript</li>
              <li className="tag">React</li>
              <li className="tag">ASP.NET</li>
              <li className="tag">Razor Pages</li>
              <li className="tag">Express</li>
              <li className="tag">SQL</li>
              <li className="tag">MongoDB</li>
            </ul>

            {/* Resume Button */}
            <li style={{listStyle: "none", display: "flex", justifyContent: "center"}}>
              <a id="resume-btn" className="nav-link rounded" target="_blank" rel="noreferrer" href={data["resume-link"]} style={{width: "100px", textAlign: "center"}} >
                Resume
              </a>
            </li>
          </div>
        </div>
        <svg className="appear-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#324052" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  );
}

export default About;
