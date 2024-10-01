import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { IconButton, TextField, Grid2, Card, CardMedia, CardContent, Button, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import theme from '../components/theme';
import styles from '../components/style';
import Header from '../components/Header';

function Home({ stories, favorites, toggleFavorite }) {
  const [searchQuery, setSearchQuery] = useState('');
  

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  
  useEffect(() => {
    if (avatar) {
      localStorage.setItem('userAvatar', avatar);
    }
  }, [avatar]);

  return (
    <div style={styles.root}>
     <Header avatar={avatar} />
      <div style={styles.searchBar}>
        <TextField
          fullWidth
          label="Search stories..."
          variant="outlined"
          value={searchQuery}
          sx={{ bgcolor: theme.palette.text.primary }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Grid2 container sx={{ ml: 7 }} spacing={4}>
        {filteredStories.slice(0, 9).map(story => (
          <Grid2 item xs={12} sm={6} md={4} key={story.id}>
            <Card sx={{ ...styles.card, bgcolor: theme.palette.text.main }}>
              <CardMedia
                sx={{ ...styles.media }}
                image={story.coverImage}
                title={story.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {story.title}
                </Typography>
                <Typography variant="body2" component="h3">
                  Genre: {story.category}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {story.description}
                </Typography>
                <br />
                <Box display="flex" alignItems="center">
                  <Button
                    component={Link}
                    to={`/Story/${story.id}`}
                    variant="contained"
                    sx={{ bgcolor: theme.palette.secondary.main }}
                  >
                    Read More
                  </Button>
                  <IconButton onClick={() => toggleFavorite(story.id)} sx={{ marginLeft: 20 }}>
                    {favorites.includes(story.id) ? (
                      <FavoriteIcon sx={{color: theme.palette.error.main}}/>
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default Home;
