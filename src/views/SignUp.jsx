import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

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
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  label="Username"
                  fullWidth
                  value={userDetails.username}
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
                  value={userDetails.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignUp;
