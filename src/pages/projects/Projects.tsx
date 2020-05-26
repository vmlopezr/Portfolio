import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Projects = memo(()=> {
  return (
    <div>
      <h1>Projects</h1>
      <p>This is the projects page</p>

    <Link to="/">Go to Home</Link>
    <br />
    <Link to="/cv">Go to Resume</Link>
    </div>
  )
})
export default Projects;