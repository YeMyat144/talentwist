import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>Welcome to Interactive Storytelling!</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/signup">
            Sign Up
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/login">
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
