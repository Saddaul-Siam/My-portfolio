import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MyServices from '../MyServices/MyServices';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <MyServices />
    </div>
  );
};

export default Home;