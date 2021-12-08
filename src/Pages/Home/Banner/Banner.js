import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'
import Typical from 'react-typical'
import PDF from '../../../images/Md_ Saddaul Islam Sheam - Google Docs.pdf'
import Particles from "react-tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Box className="background" id="home">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ECF0F3",
          },
          links: {
            color: "#ECF0F3",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      <Container sx={{ height: '95vh' }}>
        <Box  
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        sx={{ display: 'flex', alignItems: 'center', height: '95vh' }}>
          <Box>
            <Typography sx={{ color: '#fff', fontSize: '27px', fontFamily: 'Ubuntu' }}>
              Hello, my name is
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: '75px', fontFamily: 'Ubuntu', fontWeight: 600 }}>
              Saddaul Siam
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: '35px', fontFamily: 'Ubuntu', fontWeight: 500 }}>
              <Box sx={{ display: 'flex' }}> <Box sx={{ mr: 1, }}>And I'm a</Box> <Box sx={{ color: 'crimson' }}><Typical
                loop={Infinity}
                wrapper="span"
                delay="1000"
                steps={[
                  'Web Developer',
                  2000,
                  'Web Designer',
                  2000,
                  'React Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Programmer',
                  2000
                ]}
              /></Box>
              </Box>
            </Typography>
            <Box sx={{ pt: 3 }}>
              <a href={PDF} download="Resume of Md Saddaul Islam Sheam" target='_blank' rel="noreferrer"
                style={{ textDecoration: "none" }}><Button variant="contained" color="error" sx={{ px: 4, py: 2 }}>Download Resume</Button></a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;