import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typical from 'react-typical'
import PDF from '../../../images/Md_ Saddaul Islam Sheam - Google Docs.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <Container sx={{ py: 20 }} id="about">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography sx={{ fontFamily: 'Ubuntu', fontSize: 40, fontWeight: 500 }}>
            About me
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: 'Ubuntu', pb: 5 }}>
            ----------Who i am---------
          </Typography>
        </Box>
      </Box>
      <Grid container xs={{ alignItems: 'center' }} spacing={10}>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
        <Grid item sm={12} md={5} 
        data-aos="fade-down" 
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        >
          <img width="100%" src="https://i.ibb.co/31R7YBn/186558243-891331958095401-5868203000874984080-n.jpg" alt="" />
        </Grid>
        <Grid item sm={12} md={7} data-aos="fade-up" 
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800">
          <Typography sx={{ fontFamily: 'Ubuntu', fontSize: 24, fontWeight: 600, lineHeight: '4rem' }}>
            <Box sx={{ display: 'flex' }}> <Box sx={{ mr: 1 }}>I'm Saddaul Siam and I'm a</Box> <Box sx={{ color: 'crimson' }}><Typical
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

          <Typography paragraph >
            I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with JavaScript ReactJS
          </Typography>
          <a href={PDF} download="Resume of Md Saddaul Islam Sheam" target='_blank' rel="noreferrer"
            style={{ textDecoration: "none" }}><Button variant="contained" color="error" sx={{ px: 4, py: 2 }}>Download Resume</Button></a>
        </Grid>
        {/* </Box> */}
      </Grid>
    </Container>
  );
};

export default About;