import React, { memo } from "react";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import ResumePage from "./pages/resume/ResumePage";
import { HashRouter, NavLink, Route } from "react-router-dom";
import "./index.scss";
const Main = memo(() => {
  return (
    <HashRouter>
      <div className="container">
        <h1>Victor's Portfolio</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={ResumePage} />
        </div>
        <div className="footer"></div>
      </div>
    </HashRouter>
  );
});
export default Main;
