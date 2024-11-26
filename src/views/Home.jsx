import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, TextField, Grid, Card, CardMedia, CardContent, Button, Typography, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, Search } from '@mui/icons-material';
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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

function Home({ stories, favorites, toggleFavorite }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header avatar={avatar} />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <StyledTextField
            fullWidth
            variant="outlined"
            placeholder="Search stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <Search color="action" sx={{ mr: 1 }} />,
            }}
            sx={{ maxWidth: 600 }}
          />
        </Box>

        <Grid container spacing={4}>
          {filteredStories.map(story => (
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
                      {favorites.includes(story.id) ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;

