import { Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const MyServices = () => {
  const useStyle = makeStyles({
    backgroundColor: {
      backgroundColor: '#262626'
    }
  })
  const { backgroundColor } = useStyle()
  return (
    <div className={backgroundColor}>
      <Container sx={{ py: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: 'Ubuntu', fontSize: 40, fontWeight: 500, color: 'white' }}>My Services</Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', fontSize: 16, fontWeight: 'bold', color: 'white' }}>--------What i provide--------</Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4} >
            <Paper  sx={{background:'#666',color:'white'}}elevation={0} >
              Siam is back
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} >
            <Paper sx={{background:'#666',color:'white'}} elevation={0} >
              Siam is back
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} >
            <Paper sx={{background:'#666',color:'white'}} elevation={0} >
              Siam is back
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
};

export default MyServices;