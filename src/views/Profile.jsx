import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Fade,
} from '@mui/material';
import { Edit, Save, Cancel } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';

const ProfileCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
}));

const AvatarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(16),
  height: theme.spacing(16),
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null,
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userProfile'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
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
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <>
    <Header/>
    <ProfileCard>
      <CardContent>
        <AvatarWrapper>
          <LargeAvatar alt={user.name} src={user.avatar} />
        </AvatarWrapper>

        <Typography variant="h4" align="center" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          {user.email}
        </Typography>

        <Fade in={editMode}>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              margin="normal"
            />

            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Upload Avatar
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
            </Button>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                onClick={() => setEditMode(false)}
                startIcon={<Cancel />}
                sx={{ mr: 1 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={<Save />}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Fade>

        {!editMode && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="outlined"
              onClick={() => setEditMode(true)}
              startIcon={<Edit />}
            >
              Edit Profile
            </Button>
          </Box>
        )}
      </CardContent>
    </ProfileCard>
    </>
  );
}

export default ProfilePage;

