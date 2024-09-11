import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import { AppBar, Toolbar, IconButton, Typography, TextField, Card, CardContent, Button } from '@mui/material';  
import { makeStyles } from '@mui/styles';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  

const useStyles = makeStyles({  
    root: {  
        flexGrow: 1,  
        padding: '20px',  
    },  
    card: {  
        maxWidth: 600,  
        margin: '0 auto',  
        padding: '20px',  
    },  
    textField: {  
        margin: '10px 0',  
    },  
});  

function ContactPage() {  
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
        // Handle form submission here  
        console.log('Form submitted:', formData);  
        // Reset the form or provide user feedback  
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
            <Card className={classes.card}>  
                <CardContent>  
                    <Typography variant="h5" component="h2" gutterBottom>  
                        Contact Us  
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
                            type="email"  
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

export default ContactPage;