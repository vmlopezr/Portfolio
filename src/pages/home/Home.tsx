import React, { memo } from "react";
import { Link } from "react-router-dom";

const Home = memo(() => {
  return (
    <div>
      <h1>HOME</h1>
      <p>This is the home page</p>

      <Link to="/projects">Go to Projects</Link>
      <br />
      <Link to="/cv">Go to Resume</Link>
    </div>
  );
});
export default Home;
