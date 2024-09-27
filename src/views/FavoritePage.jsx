import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import black from '../assets/wu.jpeg';
import Header from '../components/Header';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 345,
  },
  media: {
    height: 200,
  },
});

function FavoritePage({ favorites, stories, toggleFavorite }) {
  const classes = useStyles();
  
  const favoriteStories = stories.filter(story => favorites.includes(story.id));

  return (
    <div className={classes.root}>
      <Header/>
      <Typography variant="h4" gutterBottom sx={{ mt: 3, textAlign: 'center' }}>
        Favorite Stories
      </Typography><br />

      <Grid2 container sx={{ ml: 7 }} spacing={4}>
        {favoriteStories.length > 0 ? (
          favoriteStories.map(story => (
            <Grid2 item xs={12} sm={6} md={4} key={story.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={black}
                  title={story.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {story.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A brief description of {story.title}.
                  </Typography>
                  <br />
                  <Button component={Link} to={`/story/${story.id}`} variant="contained" color="primary">
                    Read More
                  </Button>
                  <IconButton onClick={() => toggleFavorite(story.id)} sx={{ marginLeft: 20}}>
                    <FavoriteIcon color="error" />
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