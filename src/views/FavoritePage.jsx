import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from '../components/Header';
import theme from '../components/theme';
import styles from '../components/style';

function FavoritePage({ favorites, stories, toggleFavorite }) {
  const favoriteStories = stories.filter(story => favorites.includes(story.id));
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
      <Typography variant="h4" gutterBottom sx={{ mt: 3, textAlign: 'center', color: theme.palette.secondary.main }}>
        Favorite Stories
      </Typography><br />

      <Grid2 container sx={{ ml: 7 }} spacing={4}>
        {favoriteStories.length > 0 ? (
          favoriteStories.map(story => (
            <Grid2 item xs={12} sm={6} md={4} key={story.id}>
              <Card style={styles.card}>
                <CardMedia
                  style={styles.media}
                  image={story.coverImage}
                  title={story.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {story.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {story.description}
                  </Typography>
                  <br />
                  <Button component={Link} to={`/story/${story.id}`} variant="contained" sx={{bgcolor: theme.palette.secondary.main}}>
                    Read More
                  </Button>
                  <IconButton onClick={() => toggleFavorite(story.id)} sx={{ marginLeft: 20}}>
                    <FavoriteIcon sx={{color: theme.palette.error.main}} />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid2>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 3, textAlign: 'center' }}>
            No favorite stories selected yet.
          </Typography>
        )}
      </Grid2>
    </div>
  );
}

export default FavoritePage;