import React, { memo } from 'react';
import './Home.scss';

const Home = memo(() => {
  return (
    <div className="home-container">
      <h1>Victor Lopez</h1>
      <p>This is the home page</p>
    </div>
  );
});
Home.displayName = 'Home';
export default Home;
