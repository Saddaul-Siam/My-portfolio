import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
    </div>
  );
};

export default Home;