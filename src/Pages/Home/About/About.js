import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/profile-1.jpeg'
const About = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography variant="h3" sx={{ fontFamily: 'Ubuntu' }}>
            About me
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: 'Ubuntu' }}>
            ---Who i am---
          </Typography>
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={12} md={5}>
          <img width="400px" height="450px" src={img} alt="" />
        </Grid>
        <Grid item xs={12} md={7}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi earum rerum illo mollitia eius voluptatum, esse iure vero molestias eveniet dignissimos maxime accusamus reprehenderit dolore distinctio? Reiciendis quia tempore eveniet incidunt dolorem molestiae quos doloribus! Ipsam incidunt minus quia, ducimus quas nemo voluptatem recusandae aliquid accusamus natus enim dolor molestiae, ratione consequatur vero sit, iure atque doloremque maxime mollitia dicta dolores commodi! Quam corrupti recusandae sapiente aperiam, eos vero ad quod quo beatae ea repellat reprehenderit a fuga doloribus, aliquid officia tempora animi eius voluptate maiores porro impedit ex. Veritatis quo illo blanditiis nobis, fugit natus. Excepturi incidunt odio velit, quo, dolorem nostrum maxime, consectetur cumque ipsum hic eum quibusdam atque voluptatibus nulla doloremque. Esse eligendi illo sequi perspiciatis, id eius, expedita nostrum cum, laborum exercitationem harum voluptatibus. Nulla, suscipit
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;