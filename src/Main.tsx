import React, { memo } from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import ResumePage from './pages/resume/ResumePage';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import './index.scss';

const Main = memo(() => {
  return (
    <HashRouter>
      <div className="container">
        <header>
          <ul className="menu">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Experience</NavLink>
            </li>
          </ul>
          <div className="media-pc">
            <a className="github-link" href="https://github.com/vmlopezr">
              <IoLogoGithub
                color="#fff"
                size="50px"
                style={{ padding: '10px' }}
              />
              Github
            </a>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/victorlopezrodriguez/"
            >
              <IoLogoLinkedin
                color="#fff"
                size="50px"
                style={{ padding: '10px' }}
              />
              LinkedIn
            </a>
          </div>

          <footer className="pcfooter">
            <a href="http://github.com/vmlopezr">Source Code</a>
          </footer>
        </header>
        <div className="main">
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={ResumePage} />
          </div>
          <footer className="mobilefooter">
            <a className="github-link" href="https://github.com/vmlopezr">
              <IoLogoGithub
                color="#fff"
                size="50px"
                style={{ padding: '10px' }}
              />
            </a>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/victorlopezrodriguez/"
            >
              <IoLogoLinkedin
                color="#fff"
                size="50px"
                style={{ padding: '10px' }}
              />
            </a>
            <a href="http://github.com/vmlopezr/portfolio">Source Code</a>
          </footer>
        </div>
      </div>
    </HashRouter>
  );
});
Main.displayName = 'Main';
export default Main;
