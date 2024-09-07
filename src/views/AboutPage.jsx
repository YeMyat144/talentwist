import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, TextField, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
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

function AboutPage() {
    const classes = useStyles();
    return (
       <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
              <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</Link>
              <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
            </Toolbar>
          </AppBar>
        <div>
            <p>This is about page</p>
        </div>
    </div>
    );
}
export default AboutPage;