import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'


const Banner = () => {
  return (
    <Box className="background" id="home">
      <Container sx={{ height: '95vh' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '95vh' }}>
          <Box>
            <Typography sx={{ color: '#fff', fontSize: '27px', fontFamily: 'Ubuntu' }}>
              Hello, my name is
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: '75px', fontFamily: 'Ubuntu', fontWeight: 600 }}>
              Saddaul Siam
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: '40px', fontFamily: 'Ubuntu', fontWeight: 500 }}>
              And I'm a Developer
            </Typography>
            <Button variant="outlined" color="error" sx={{ fontSize: '20px', fontWeight: 400, }}>Hire me</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;