import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'
import Typical from 'react-typical'

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
            <Typography sx={{ color: '#fff', fontSize: '35px', fontFamily: 'Ubuntu', fontWeight: 500 }}>
              <Box sx={{ display: 'flex' }}> <Box sx={{ mr: 1 }}>And I'm a</Box> <Typical
                loop={Infinity}
                wrapper="span"
                delay="1000"
                steps={[
                  'Web Developer',
                  2000,
                  'Programmer',
                  2000
                ]}
              />
              </Box>
            </Typography>
            <Button variant="contained" color="error" sx={{ px: 4, py: 1, fontSize: '20px', fontWeight: 400, mt: 3 }}>Hire me</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;