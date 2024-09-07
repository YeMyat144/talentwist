import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, AppBar, Toolbar, TextField, Typography, Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    searchBar: {
      margin: '20px 0',
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function ProfilePage() {
    const classes = useStyles();
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/150' 
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated User Info:', user);
    setEditMode(false);
  };

  return (
    <Container sx={{ mt: 5 }}>
        <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</Link>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
        <Avatar
          alt={user.name}
          src={user.avatar}
          sx={{ width: 150, height: 150 }}
        />
        <Typography variant="h4">{user.name}</Typography>
        <Typography variant="body1">{user.email}</Typography>

        <Button variant="outlined" onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Cancel' : 'Edit Profile'}
        </Button>

        {editMode && (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Avatar URL"
              name="avatar"
              value={user.avatar}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default ProfilePage;
