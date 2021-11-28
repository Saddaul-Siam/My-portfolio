import { Button, Container, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Container sx={{ py: 20 }} id="contact">
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 40, color: '#3C3E41' }}>
          Contact With Me
        </Typography>
      </Box>
      <Grid container spacing={7}>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, pb: 15, backgroundColor: '#ECF0F3 !important' }} elevation={3}>
            <img width="100%" src="https://i.ibb.co/9YkgSrL/contact1.png" alt="" />
            <Typography variant="h4" sx={{ pt: 2 }}>
              Saddaul Siam
            </Typography>

            <Typography sx={{ pt: 2, fontSize: '18px' }}>
              Phone: +8801311333277
              <br />
              Email: saddaulsiam@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ py: 2 }}>
              FIND WITH ME
            </Typography>
            <Typography>
              <a href="https://www.facebook.com/saddaul-siam/" target="_blank" rel="noreferrer">
                <IconButton size="large">
                  <FacebookIcon />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/saddaul-siam/" target="_blank" rel="noreferrer"><IconButton size="large">
                <LinkedInIcon />
              </IconButton>
              </a>
              <a href="https://www.instagram.com/saddaul.siam/" target="_blank" rel="noreferrer">
                <IconButton size="large">
                  <InstagramIcon />
                </IconButton>
              </a>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, backgroundColor: '#ECF0F3 !important' }} elevation={3}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2">YOUR NAME</Typography>
                  <TextField sx={{ width: '100%', backgroundColor: '#fff' }} id="outlined-basic" variant="outlined" {...register("example")} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2">PHONE NUMBER </Typography>
                  <TextField id="outlined-basic" sx={{ width: '100%', backgroundColor: '#fff' }} variant="outlined" {...register("example")} />
                </Grid>
              </Grid>
              <Typography variant="body2" sx={{ pt: 3 }}>EMAIL</Typography>
              <TextField id="outlined-basic" sx={{ width: '100%', mb: 3, backgroundColor: '#fff' }} variant="outlined" {...register("example")} />
              <Typography variant="body2">SUBJECT</Typography>
              <TextField id="outlined-basic" sx={{ width: '100%', mb: 3, backgroundColor: '#fff' }} variant="outlined" {...register("example")} />
              <Typography variant="body2">YOUR MESSAGE</Typography>
              <textarea rows="10" style={{ width: '100%', border: 'none' }} />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <Button type="submit" sx={{ width: '100%', my: 3, py: 2 }} variant="contained">SEND MESSAGE</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;