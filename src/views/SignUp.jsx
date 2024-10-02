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
          width: '50vh',
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color="white">
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  name="username"
                  label="Username"
                  fullWidth
                  sx={{bgcolor:'white'}}
                  value={userDetails.username}
                  onChange={handleChange}
                  color='black'
                  required
                />
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  sx={{bgcolor:'white'}}
                  color='black'
                  value={userDetails.password}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: theme.palette.secondary.main }}>
                  Sign Up
                </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SignUp;
