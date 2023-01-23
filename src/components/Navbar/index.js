import React from "react";

class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
  
    // Tell the parent component "App" to switch to a different component
    changeActiveComponent(componentName) {
      switch (componentName) {
        case "home":
          this.props.propUseHome();
          break;
  
        case "about":
          this.props.propUseAbout();
          break;
  
        case "projects":
          this.props.propUseProjects();
        break;
      
        default:
          // error check
          console.log("Switching to a  component name that is not handled: '" + componentName + "'");
          break;
      }
    }
  
    render() {
      return (
      <>
      <header className="bg-dark">
      <nav className="container-md navbar navbar-expand-sm navbar-dark px-3">
        <button href="" className="navbar-brand m-2 h1 logo" onClick={() => this.changeActiveComponent("home")}>
          J
        </button>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-target="#navbarNav"
          className="navbar-toggler"
        ></button>
        <div
          className="collapse navbar-collapse flex-row-reverse bg-dark"
          id="navbarNav"
        >
          <ul className="navbar-nav bg-dark">
            <li className="nav-item active bg-dark">
  
              <button onClick={() => this.changeActiveComponent("about")}>
                About
              </button>
            </li>
            <li className="nav-item active bg-dark">
              <button onClick={() => this.changeActiveComponent("projects")}>
                My Work
              </button>
            </li>
            <li className="nav-item active bg-dark">
              <button
                href="#fetch-resume"
                className="nav-link active resume-btn rounded"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>
      </header>
      </>
      )
    };
  }
  
  export default Navbar;