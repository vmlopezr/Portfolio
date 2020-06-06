import React, { memo } from 'react';

import './Home.scss';

const Home = memo(() => {
  return (
    <div className="home-container">
      <h1>Victor Lopez</h1>
      <h2>Embedded Software Developer</h2>
    </div>
  );
});
Home.displayName = 'Home';
export default Home;
