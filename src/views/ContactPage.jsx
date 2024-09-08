import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, TextField, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
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

function ContactPage() {
    const classes = useStyles();
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
        <div>
            <p>This is contact page</p>
        </div>
    </div>
    );
}
export default ContactPage;