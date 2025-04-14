import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Droplink
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Your secure file sharing solution
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Get Started
          </Button>
          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            size="large"
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 