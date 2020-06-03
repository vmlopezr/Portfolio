import React, { memo } from 'react';
import './styles.scss';

const Home = memo(() => {
  return (
    <div>
      <h1>HOME</h1>
      <p>This is the home page</p>
    </div>
  );
});
Home.displayName = 'Home';
export default Home;
