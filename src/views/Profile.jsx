import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Input, AppBar, Toolbar, TextField, Typography, IconButton, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
        name: 'Name',
        email: 'Email',
        avatar: 'https://via.placeholder.com/150'
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
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser((prevUser) => ({
                    ...prevUser,
                    avatar: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated User Info:', user);
        setEditMode(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</Link>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', marginRight: 'auto' }}>Contact</Link>
                    <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>
                        <IconButton color="inherit">
                            <AccountCircleIcon />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
            <br />
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
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Upload Avatar:
                        </Typography>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Save Changes
                        </Button>
                    </Box>
                )}
            </Box>
        </div>
    );
}

export default ProfilePage;
