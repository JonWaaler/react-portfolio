import React, {useCallback} from "react";
import "./Navbar.css";
/*
  function Navbar1() {
    return (
      <header className="bg-dark">
        <nav className="container-md navbar navbar-expand-sm navbar-dark px-3">
          <a href="" className="navbar-brand m-2 h1 logo">
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
                <a href="/about" className="nav-link active bg-dark">
                  About
                </a>
                <button onClick={() => this.setState}>
                  MyButtom
                </button>
              </li>
              <li className="nav-item active bg-dark">
                <a href="/projects" className="nav-link active bg-dark">
                  My Work
                </a>
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
    );
  }
*/
function Navbar({ activeComponent, onComponentChange}) {

  const handleComponentChange = useCallback(event => {
    console.log("log: navbar callback event: " + event);
    onComponentChange(event.target.value)
  }, [onComponentChange])

  return (
    <header className="bg-dark">
    <nav className="container-md navbar navbar-expand-sm navbar-dark px-3">
      <a href="" className="navbar-brand m-2 h1 logo">
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
            {/* <a href="/about" className="nav-link active bg-dark">
              About
            </a> */}
            <button onClick={() => this.setState}>
              About
            </button>
          </li>
          <li className="nav-item active bg-dark">
            {/* <a href="/projects" className="nav-link active bg-dark">
              My Work
            </a> */}
            <button>
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
  )
}

export default Navbar;