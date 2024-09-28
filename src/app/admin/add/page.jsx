import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Header from '../../components/Header';
import theme from '../../components/theme';
import styles from '../../components/style';

function AdminAddPage({ addStory }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Please fill in all fields');
      return;
    }

    // Mock ID generation
    const newStory = {
      id: Date.now(), // Replace with a better ID generation method in production
      title,
      description,
    };

    addStory(newStory);

    // Clear the form
    setTitle('');
    setDescription('');
  };

  return (
    <div style={styles.root}>
      <Header />
      <Box
        sx={{
          maxWidth: 600,
          margin: 'auto',
          p: 4,
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Story
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Story Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Story Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button type="submit" variant="contained" sx={{ bgcolor: theme.palette.primary.main }}>
            Add Story
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default AdminAddPage;
