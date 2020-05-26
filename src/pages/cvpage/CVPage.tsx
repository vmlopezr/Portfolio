import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const CVPage = memo(()=> {
  return (
    <div>
      <h1>Resucme</h1>
      <p>This is the resume page</p>

    <Link to="/">Go to Home</Link>
    <br />
    <Link to="/projects">Go to Projects</Link>
    </div>
  )
})
export default CVPage;