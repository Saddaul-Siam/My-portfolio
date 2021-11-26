import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;