import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Grid2, Container, List, ListItem, IconButton, ListItemText, CircularProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from '../components/style';
import Header from '../components/Header';
import stories from '../data/stories'; 

function StoryPage() {
  const { storyId } = useParams();
  const [currentNode, setCurrentNode] = useState(null);
  const [storyNodes, setStoryNodes] = useState([]);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  useEffect(() => {
    if (avatar) {
      localStorage.setItem('userAvatar', avatar);
    }
  }, [avatar]);

  useEffect(() => {
    const story = stories[storyId];
    if (story) {
      setCurrentNode(story.startNode);
      setStoryNodes(story.nodes);
    }
  }, [storyId]);

  const handleChoice = (nextNodeId) => {
    const nextNode = storyNodes.find((node) => node.id === nextNodeId);
    setCurrentNode(nextNode);
  };

  return (
    <div style={styles.root}>
      <Header avatar={avatar} />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        {currentNode ? (
          <Card sx={{ mt: 4, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {currentNode.text}
              </Typography>

              <List>
                {currentNode.choices.map((choice, index) => (
                  <ListItem button key={index} onClick={() => handleChoice(choice.nextNode)}>
                    <ListItemText primary={choice.text} />
                    <ArrowForwardIosIcon />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ) : (
          <Grid2 container justifyContent="center" sx={{ mt: 5 }}>
            <CircularProgress />
          </Grid2>
        )}

        {/* Return to Home Button */}
        <Grid2 container justifyContent="center" sx={{ mt: 4 }}>
          <Button variant="contained" color="secondary" startIcon={<HomeIcon />} component={Link} to="/home">
            Return to Home
          </Button>
        </Grid2>
      </Container>
    </div>
  );
}

export default StoryPage;
