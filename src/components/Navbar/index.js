import React from "react";
import ResumeLink from "../../projects.json"
import "./Navbar.css"

class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
  
    // Tell the parent component "App" to switch to a different component
    changeActiveComponent(componentName) {
        this.props.propChangeComponent(componentName);
    }

    // Creates a Navbutton, choosing between an 'active' or inactive version of the button
    createButton (componentName) {
      // Check if the component we're creating is the active component
      if(this.props.propActiveComponent == componentName){
        return (
          // Active button
          <button 
                className="nav-link active rounded remove-border"
                onClick={() => this.changeActiveComponent(componentName)}>
                  {this.capitalizeFirstLetter(componentName)}
          </button>
        );
      }
      else{
        return (
          // Inactive button
          <button 
                className="nav-link rounded remove-border"
                onClick={() => this.changeActiveComponent(componentName)}>
                  {this.capitalizeFirstLetter(componentName)}
          </button>
        );
      }


    }

    // Capitalize fist letter in a string
    capitalizeFirstLetter(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }

    // Separates navbar list from the rest of the code
    createNavButtons(){
        return (
          <ul className="navbar-nav bg-dark">
            <li className="nav-item active bg-dark">
              {
                this.createButton("home")
              }
            </li>
            <li className="nav-item active bg-dark">
              {
                this.createButton("projects")
              }
            </li>
            <li className="nav-item active bg-dark">
              <a id="resume-btn" className="nav-link active rounded" target="_blank" href={ResumeLink["resume-link"]}>
                Resume
              </a>
            </li>
        </ul>
        )
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
          {this.createNavButtons()}
        </div>
      </nav>
      </header>
      </>
      )
    };
  }
  
  export default Navbar;