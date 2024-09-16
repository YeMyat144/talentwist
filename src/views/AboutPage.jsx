import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import { AppBar, Toolbar, IconButton, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';  
import { makeStyles } from '@mui/styles';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    searchBar: {
      margin: '20px 56px',
    },
    card: {
      width: 345,
    },
    media: {
      height: 200,
    },
  }); 

function AboutPage() {  
    const classes = useStyles();  
    const [formData, setFormData] = useState({  
        name: '',  
        email: '',  
        message: '',  
    });  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        console.log('Form submitted:', formData);  
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

            <Card>  
                <CardContent>  
                    <Typography variant="h5" component="h2" gutterBottom>  
                        About Us  
                    </Typography>  
                    <Typography variant="body1" gutterBottom>  
                        This is the about page. Please fill out the form below:  
                    </Typography>  
                    <form onSubmit={handleSubmit}>  
                        <TextField  
                            fullWidth  
                            label="Name"  
                            name="name"  
                            value={formData.name}  
                            onChange={handleChange}  
                            variant="outlined"  
                            className={classes.textField}  
                            required  
                        />  
                        <TextField  
                            fullWidth  
                            label="Email"  
                            name="email"  
                            value={formData.email}  
                            onChange={handleChange}  
                            variant="outlined"  
                            className={classes.textField}  
                            required  
                        />  
                        <TextField  
                            fullWidth  
                            label="Message"  
                            name="message"  
                            value={formData.message}  
                            onChange={handleChange}  
                            variant="outlined"  
                            multiline  
                            rows={4}  
                            className={classes.textField}  
                            required  
                        />  
                        <Button variant="contained" color="primary" type="submit">  
                            Submit  
                        </Button>  
                    </form>  
                </CardContent>   
            </Card>  
        </div>  
    );  
}  

export default AboutPage;