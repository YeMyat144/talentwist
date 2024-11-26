import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import { Favorite, ArrowBack } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const EmptyState = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

function FavoritePage({ favorites, stories, toggleFavorite }) {
  const [avatar, setAvatar] = useState(null);
  const favoriteStories = stories.filter(story => favorites.includes(story.id));

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  return (
    <div>
      <Header avatar={avatar} />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" color="primary" sx={{ fontWeight: 'bold' }}>
            Your Favorite Stories
          </Typography>
          <Button
            component={Link}
            to="/home"
            startIcon={<ArrowBack />}
            variant="outlined"
            color="primary"
          >
            Back to Home
          </Button>
        </Box>

        {favoriteStories.length > 0 ? (
          <Grid container spacing={4}>
            {favoriteStories.map(story => (
              <Grid item xs={12} sm={6} md={4} key={story.id}>
                <StyledCard>
                  <StyledCardMedia
                    image={story.coverImage}
                    title={story.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {story.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 2 }}>
                      {story.description}
                    </Typography>
                    <Typography variant="body2" color="primary" component="p" sx={{ mb: 2 }}>
                      Genre: {story.category}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Button
                        component={Link}
                        to={`/Story/${story.id}`}
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Read More
                      </Button>
                      <IconButton onClick={() => toggleFavorite(story.id)} color="secondary">
                        <Favorite />
                      </IconButton>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyState>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              You haven't added any favorite stories yet.
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Explore our collection and add stories to your favorites!
            </Typography>
            <Button
              component={Link}
              to="/home"
              variant="contained"
              color="primary"
              startIcon={<ArrowBack />}
            >
              Explore Stories
            </Button>
          </EmptyState>
        )}
      </Container>
    </div>
  );
}

export default FavoritePage;
