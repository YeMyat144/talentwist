import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, Lock, Email } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Bg from '../assets/bg.jpg';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  marginTop: theme.spacing(8),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
}));

function SignUp() {
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(userDetails));
    console.log('User Signed Up:', userDetails);
    navigate('/home');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${Bg})`,
      }}
    >
      <StyledCard>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Create Account
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" paragraph>
            Join Tale&Twist and start your adventure
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="username"
              label="Username"
              fullWidth
              margin="normal"
              value={userDetails.username}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={userDetails.email}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={userDetails.password}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Button color="primary" onClick={() => navigate('/login')}>
              Log In
            </Button>
          </Typography>
        </CardContent>
      </StyledCard>
    </Box>
  );
}

export default SignUp;
