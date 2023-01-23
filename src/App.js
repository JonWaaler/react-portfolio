//import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import {Component, useState}  from "react";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SwitchComponents from "./components/SwitchComponents";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeComponent: "home"
    };
  }
  
  // Functions utilized by the child component Navbar
  useComponent_Home = () => {
    this.setState({activeComponent: "home"});
  }
  useComponent_About = () => {
    this.setState({activeComponent: "about"});
  }
  useComponent_Projects = () => {
    this.setState({activeComponent: "projects"});
  }

  
  render() {
    console.log("RenderApp");
    return (
    <>
    <Navbar propUseHome={this.useComponent_Home} propUseAbout={this.useComponent_About} propUseProjects={this.useComponent_Projects}/>
        <SwitchComponents active={this.state.activeComponent}>
          <Home name="home" />
          <About name="about" />
          <Projects name="projects" />
        </SwitchComponents>
    <Footer />
    </>
    )
  };
}

export default App;




/*
function MyNavbar() {
  return (
    <>
    <header className="bg-dark">
    <nav className="container-md navbar navbar-expand-sm navbar-dark px-3">
      <a href="" className="navbar-brand m-2 h1 logo" onClick={() => setActiveComponent("home")}>
        J
      </a>
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

            <button onClick={() => setActiveComponent("about")}>
              About
            </button>
          </li>
          <li className="nav-item active bg-dark">
            <button onClick={() => setActiveComponent("projects")}>
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
}
*/
