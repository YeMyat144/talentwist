import React from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Bg from '../assets/bg.jpg';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
}));

function HomePage() {
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
      <StyledCard >
        <CardContent>
          <Typography variant="h3" gutterBottom align="center" color="primary">
            Welcome to Tale&Twist!
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
            Dive into a world of endless adventures and create your own path.
          </Typography>
          <ButtonContainer>
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              size="large"
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              size="large"
            >
              Login
            </Button>
          </ButtonContainer>
        </CardContent>
      </StyledCard>
    </Box>
  );
}

export default HomePage;

