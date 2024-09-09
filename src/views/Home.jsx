import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, TextField, Grid2, Card, Box, CardMedia, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import black from '../assets/wu.jpeg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  searchBar: {
    margin: '20px 40px',
  },
  card: {
    width: 345,
  },
  media: {
    height: 200,
  },
});

function Home() {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const stories = [
    { id: 1, title: 'The Dark Forest', category: 'Fantasy', coverImage: 'black' },
    { id: 2, title: 'The Haunted Mansion', category: 'Horror' },
    { id: 3, title: 'The Space Odyssey', category: 'Fantasy' },
    { id: 4, title: 'The Lost City', category: 'Horror' },
    { id: 5, title: 'The Mysterious Island', category: 'Adventure' },
    { id: 6, title: 'The Secret Tunnel', category: 'Adventure' },
    { id: 7, title: 'The Underwater Adventure', category: 'Adventure' },
    { id: 8, title: 'The Time Traveler', category: 'Fantasy' },
    { id: 9, title: 'The Pirate Treasure', category: 'Fantasy' },
    { id: 10, title: 'The Witch\'s Cottage', category: 'Horror' },
  ];

  // Load favorites from localStorage when component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
       <Toolbar>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
        <Link to="/favorite" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Favorite</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', marginRight: 'auto' }}>Contact</Link>
        
        <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Link>
       </Toolbar>
      </AppBar>

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
                <Box display="flex" alignItems="center"> 
                <Button component={Link} to={`/Story/${story.id}`} variant="contained" color="primary">
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
