import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import theme from '../components/theme';

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
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{color: theme.palette.primary.main}}>Login</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  label="Username"
                  fullWidth
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth sx={{bgcolor: theme.palette.secondary.main}}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
