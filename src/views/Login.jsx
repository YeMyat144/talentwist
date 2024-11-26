import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, Lock } from '@mui/icons-material';
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

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      credentials.username === storedUser.username &&
      credentials.password === storedUser.password
    ) {
      console.log('User Logged In:', credentials);
      navigate('/home');
    } else {
      console.error('Invalid credentials');
    }
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
            Welcome Back
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" paragraph>
            Please enter your credentials to log in
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="username"
              label="Username"
              fullWidth
              margin="normal"
              value={credentials.username}
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
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={credentials.password}
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
              Log In
            </Button>
          </form>
        </CardContent>
      </StyledCard>
    </Box>
  );
}

export default Login;

