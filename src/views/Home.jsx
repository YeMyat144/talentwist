import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, TextField, Grid2, Card, Box, CardMedia, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import black from '../assets/wu.jpeg';
import theme from '../components/theme';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  searchBar: {
    margin: '20px 56px',
  },
  card: {
    width: 345,
  },
  media: {
    height: 200,
  },
});

function Home({ stories, favorites, toggleFavorite }) {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes.root}>
      <Header/>

      <div className={classes.searchBar}>
        <TextField
          fullWidth
          label="Search stories..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Grid2 container sx={{ ml: 7 }} spacing={4}>
        {filteredStories.slice(0, 9).map(story => (
          <Grid2 item xs={12} sm={6} md={4} key={story.id}>
            <Card className={classes.card} sx={{bgcolor: theme.palette.text.main}}>
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
                <Box display="flex" alignItems="center"> 
                <Button component={Link} to={`/Story/${story.id}`} variant="contained" sx={{bgcolor: theme.palette.primary.main}}>
                  Read More
                </Button>
                <IconButton onClick={() => toggleFavorite(story.id)} sx={{ marginLeft: 20}}>
                  {favorites.includes(story.id) ? (
                    <FavoriteIcon color="error" />
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
