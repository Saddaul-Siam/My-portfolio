import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typical from 'react-typical'
import PDF from '../../../images/Md_ Saddaul Islam Sheam - Google Docs.pdf'


const About = () => {
  return (
    <Container sx={{ py: 10 }} id="about">
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
      <Grid container xs={{ alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12} md={5}>
            <img width="400px" src="https://i.ibb.co/31R7YBn/186558243-891331958095401-5868203000874984080-n.jpg" alt="" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography sx={{ fontFamily: 'Ubuntu', fontSize: 24, fontWeight: 600, lineHeight: '4rem' }}>
              <Box sx={{ display: 'flex' }}> <Box sx={{ mr: 1 }}>I'm Saddaul Siam and I'm a</Box> <Typical
                loop={Infinity}
                wrapper="span"
                delay="1000"
                steps={[
                  'Developer',
                  2000,
                  'Programmer',
                  2000,

                ]}
              />
              </Box>
            </Typography>

            <Typography paragraph >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi earum rerum illo mollitia eius voluptatum, esse iure vero molestias eveniet dignissimos maxime accusamus reprehenderit dolore distinctio? Reiciendis quia tempore eveniet incidunt dolorem molestiae quos doloribus! Ipsam incidunt minus quia, ducimus quas nemo voluptatem recusandae aliquid accusamus natus enim dolor molestiae, ratione consequatur vero sit, iure atque doloremque maxime mollitia dicta dolores commodi! Quam corrupti recusandae sapiente aperiam, eos vero ad quod quo beatae ea repellat reprehenderit a fuga doloribus, aliquid officia tempora animi eius voluptate maiores porro impedit ex. Veritatis quo illo blanditiis nobis, fugit natus. Excepturi incidunt odio velit, quo, dolorem nostrum maxime, consectetur cumque ipsum hic eum quibusdam atque voluptatibus nulla doloremque. Esse eligendi illo sequi perspiciatis, id eius, expedita nostrum cum, laborum exercitationem harum voluptatibus. Nulla, suscipit
            </Typography>
            <a href={PDF} download="Resume of Md Saddaul Islam Sheam" target='_blank' rel="noreferrer" 
            style={{ textDecoration: "none" }}><Button variant="contained" color="error" sx={{ px: 4, py: 2 }}>Download Resume</Button></a>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default About;