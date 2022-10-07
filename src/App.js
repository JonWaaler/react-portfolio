import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
