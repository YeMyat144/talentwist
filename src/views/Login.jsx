import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../components/theme';
import Bg from '../assets/bg.jpg';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if credentials match stored user
    if (
      storedUser &&
      credentials.username === storedUser.username &&
      credentials.password === storedUser.password
    ) {
      console.log('User Logged In:', credentials);
      // Navigate to Home page after successful login
      navigate('/home');
    } else {
      console.error('Invalid credentials');
    }
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
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                name="username"
                label="Username"
                fullWidth
                sx={{ bgcolor: 'white' }}
                value={credentials.username}
                onChange={handleChange}
                color="black"
                required
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                sx={{ bgcolor: 'white' }}
                value={credentials.password}
                onChange={handleChange}
                required
                color="black"
              />
              <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: theme.palette.secondary.main }}>
                Login
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
