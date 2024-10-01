import React, { useState, useEffect } from 'react';
import { Avatar, Button, IconButton, Input, AppBar, Toolbar, TextField, Card, CardContent, CardActions, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../components/style';
import theme from '../components/theme';

function ProfilePage({ setAvatar }) {
  const [user, setUser] = useState({
    name: 'Name',
    email: 'Email',
    birthDate: 'Birth Date',  // Add birthDate to the initial state
  });

  const [editMode, setEditMode] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    // Load user data from localStorage if available
    const storedUser = JSON.parse(localStorage.getItem('userProfile'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    localStorage.setItem('userProfile', JSON.stringify(user));
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          avatar: reader.result,
        }));
        setAvatar(reader.result); // Update avatar in App component
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setUser((prevUser) => ({
      ...prevUser,
      avatar: null,
    }));
    setAvatarFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated User Info:', user);
    setEditMode(false);
  };

  return (
    <div style={styles.root}>
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Card className={styles.root}>
          <CardContent>
            <Box className={styles.avatarContainer} display="flex" justifyContent="center" alignItems="center">
              <Avatar
                alt={user.name}
                src={user.avatar}
                sx={{ width: 150, height: 150 }}
              />
              {user.avatar && (
                <IconButton className={styles.removeButton} onClick={handleRemoveAvatar}>
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>

            <Typography variant="h5" align="center" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
              {user.email}
            </Typography>

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

                <Typography variant="body1" sx={{ mb: 2 }}>
                  Upload Avatar:
                </Typography>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" type="submit" fullWidth sx={{bgcolor: theme.palette.secondary.main}}> 
                  Save
                </Button>
              </Box>
            )}
          </CardContent>

          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              variant="outlined"
              sx={{ borderColor: theme.palette.secondary.main, color: theme.palette.secondary.main }}
              onClick={() => setEditMode(!editMode)}
              startIcon={editMode ? <DeleteIcon /> : <EditIcon />}
            >
              {editMode ? 'Cancel' : 'Edit Profile'}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default ProfilePage;
