import React from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Bg from '../assets/bg.jpg';
import theme from '../components/theme';
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',        // Makes the background cover the entire screen
        backgroundPosition: 'center',   // Centers the background image
        backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
        width: '100vw',                 // Full viewport width
        height: '100vh',                // Full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          padding: { xs: 2, sm: 4 },    // Adjust padding based on screen size
          boxShadow: 3,
          backgroundColor: theme.palette.primary.main, // Set card background color
          width: { xs: '70%', sm: '70%', md: '50%' }, // Adjust card width for different screen sizes
        }}
      >
        <CardContent>
          <Typography variant="h3" gutterBottom align="center" color="white">
            Welcome to StoryScape!
          </Typography>
          <Typography variant="subtitle1" align="center" color="white" gutterBottom>
            Let's dive into a world of endless adventures and create your own path.
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Button variant="contained" component={Link} to='signup' color="primary" sx={{ minWidth: 120 }}>
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" component={Link} to='/login' color="secondary" sx={{ minWidth: 120 }}>
                Login
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HomePage;
