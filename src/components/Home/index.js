import React from "react";
import Codepen from "../Codepen";
import DownChevronIcon from "../../assets/images/down-chevron.svg";
import LocationIcon from "../../assets/images/google-maps.png"
import ParticleBackground from "../ParticleBackground";
import data from "../../projects.json"
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  // Tell the parent component "App" to switch to a different component
  changeActiveComponent(componentName) {
    this.props.propChangeComponent(componentName);
  }


  render() {
    return (
      <main className="bg-normal">
        <ParticleBackground />
          { /* Home/hero */}
          <div className="main-container container"  style={{height: "80vh"}}>
            <div className="center-container-col hero">
              <img className="profile-pic" src="https://jonwaaler.github.io/images/profilepicture.jpg"/>
              <h1 className="glow">Jon Waaler</h1>
              <h3 className="">Full-Stack Developer</h3>
              <button className="center-container action-view-work appear-top bg-normal" onClick={() => this.changeActiveComponent("projects")}>
                <p className="center">View My Projects</p>
              </button>
            </div>
            <div className="center-container">
              <a href="#about-me" className="view-code-sample">
                <img src={DownChevronIcon}></img>
              </a>
            </div>
          </div>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#324052" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        {/* About section */}
        <div style={{backgroundColor: "#324052", minHeight: "300px"}}>
        <div id="about-me" className="container about-section">
          <div className="about-title">
            <h3>About Me</h3>
            <div className="location-tag">
              <img className="appear-top" src={ LocationIcon } />
              <h3>Toronto, Ontario</h3>
            </div>
          </div>
          <div className="about-desc">
            <p className="container">
              Industrious entry level Full Stack Web Developer with 2 years of professional experience in Game Development using Unity3D and C#. 
              I started programming in highschool and later completed (with Honors) a 4 year Game Development degree at Ontario Tech University.
                            
            </p>
            <li className="nav-item active" style={{listStyle: "none", margin: "0 auto"}}>
              <a id="resume-btn" className="nav-link active rounded" target="_blank" href={data["resume-link"]} style={{width: "100px", textAlign: "center"}} >
                Resume
              </a>
            </li>
          </div>
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#324052" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

        
        {/* Code section */}
        <div className="main-container container" style={{height: "600px"}}>
            <div id="code-area">
              <Codepen />
            </div>
        </div>

        {/* Social links section */}
        <div className="main-container container" style={{height: "400px"}}>
            <div className="social-links">
              <h2 className="appear-top">More Code on GitHub</h2>
              <a className="appear-top" label="github" href="https://github.com/JonWaaler/react-portfolio" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
        </div>
      </main>
    )
  }
}

export default Home;