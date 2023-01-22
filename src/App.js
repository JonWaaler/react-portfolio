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


function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <>
    <Navbar />
    <button onClick={() => setActiveComponent("home")}>
      home
    </button>
    <button onClick={() => setActiveComponent("about")}>
      about
    </button>
    <button onClick={() => setActiveComponent("projects")}>
      projects
    </button>
        <SwitchComponents active={activeComponent}>
          <Home name="home" />
          <About name="about" />
          <Projects name="projects" />
        </SwitchComponents>
    <Footer />
    </>
  );
}

export default App;
