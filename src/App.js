//import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import SwitchComponents from "./components/SwitchComponents";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeComponent: "projects"
    };
  }
  
  // Function utilized by the child component Navbar
  changeComponent = componentName => {
    this.setState({activeComponent: componentName});
  }
  
  render() {
    return (
    <>
    {/* App passes to Navbar a function 'propChangeComponent' as a property.
    This allows the navbar to controll the setState for our activeComponent
    used by SwitchComponents. */}
    <Navbar propActiveComponent={this.state.activeComponent} propChangeComponent={this.changeComponent} />
      <SwitchComponents active={this.state.activeComponent}>
        <Home name="home" propChangeComponent={this.changeComponent} />
        <Projects name="projects" />
      </SwitchComponents>
    <Footer />
    </>
    )
  };
}

export default App;