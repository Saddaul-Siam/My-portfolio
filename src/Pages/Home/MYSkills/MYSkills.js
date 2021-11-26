import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './MySkills.css'


const MYSkills = () => {
  return (
    <Container sx={{ py: 5 }} id="skills">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ fontFamily: 'Ubuntu', fontSize: 40, fontWeight: 500 }}>
          My skills
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'Ubuntu', pb: 5 }}>
          ---What i know---
        </Typography>
      </Box>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontFamily: 'Ubuntu', py: 2, fontWeight: 600, fontSize: 28 }}>
            My creative skills & experiences.
          </Typography>
          <Typography sx={{  py: 2, fontWeight: 500, fontSize: 18,pb:5 }} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.
          </Typography>
          <Button variant="contained" color="error" sx={{px:3,py:1}}>Red more</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>HTML</p>
          <div class="container">
            <div class="skills html">95%</div>
          </div>

          <p>CSS</p>
          <div class="container">
            <div class="skills css">90%</div>
          </div>

          <p>JavaScript</p>
          <div class="container">
            <div class="skills js">90%</div>
          </div>

          <p>React</p>
          <div class="container">
            <div class="skills php">85%</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MYSkills;