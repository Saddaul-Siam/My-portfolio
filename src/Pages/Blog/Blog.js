import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const Blog = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Box sx={{ pt: 10, fontSize: 40 }}>Blog Coming soon</Box>
      </Container>
    </div>
  );
};

export default Blog;