import React, { useState, useEffect } from 'react';
import { Avatar, Button, Input, AppBar, Toolbar, TextField,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import styles from '../components/style';

function ProfilePage() {
    const [user, setUser] = useState({
        name: 'Name',
        email: 'Email',
        avatar: 'https://via.placeholder.com/150',
        birthDate: 'Birth Date'  // Add birthDate to the initial state
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
        <div style={styles.root}>
            <Header/>
            <br />
            <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
                <Avatar
                    alt={user.name}
                    src={user.avatar}
                    sx={{ width: 150, height: 150 }}
                />
                <TableContainer component={Paper} sx={{ mt: 2, mb: 2, maxWidth:400 }}>  
      <Table>  
        <TableHead>  
          <TableRow>  
            <TableCell colSpan={2} align="center">  
              <Typography variant="h5">Profile</Typography>  
            </TableCell>  
          </TableRow>  
        </TableHead>  
        <TableBody>  
          <TableRow>  
            <TableCell><Typography variant="h6">Name</Typography></TableCell>  
            <TableCell><Typography variant="body1">{user.name}</Typography></TableCell>  
          </TableRow>  
          <TableRow>  
            <TableCell><Typography variant="h6">Email</Typography></TableCell>  
            <TableCell><Typography variant="body1">{user.email}</Typography></TableCell>  
          </TableRow>  
        </TableBody>  
      </Table>  
    </TableContainer>  

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
