import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MyServices from '../MyServices/MyServices';
import MYSkills from '../MYSkills/MYSkills';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <MyServices />
      <MYSkills />
    </div>
  );
};

export default Home;