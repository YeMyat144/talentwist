import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import theme from '../components/theme';
import Bg from '../assets/bg.jpg';

function SignUp() {
  const [userDetails, setUserDetails] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user details in localStorage
    localStorage.setItem('user', JSON.stringify(userDetails));
    console.log('User Signed Up:', userDetails);
    
    // Navigate to Home page after successful sign-up
    navigate('/home');
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          padding: { xs: 2, sm: 4 },
          borderRadius: 4,
          backgroundColor: theme.palette.primary.main,
          width: { xs: '70%', sm: '70%', md: '50%' },
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color="white">
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  label="Username"
                  fullWidth
                  value={userDetails.username}
                  onChange={handleChange}
                  color='white'
                  required
                  InputLabelProps={{ style: { color: 'white' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  color='white'
                  value={userDetails.password}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: 'white' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: theme.palette.secondary.main }}>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SignUp;
