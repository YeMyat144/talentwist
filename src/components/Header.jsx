"use client";
import { Avatar, AppBar, Toolbar, Box, IconButton } from "@mui/material";  
import { Link } from 'react-router-dom';
import theme from "./theme";


export default function Header({avatar}) {
  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>  
    <Toolbar>  
      <Link to="/home" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>  
      <Link to="/favorite" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Favorite</Link>  
      <Box sx={{ flexGrow: 1 }} /> 
      <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>  
        <IconButton color="inherit">  
          {avatar ? (
              <Avatar src={avatar} />
            ) : (
              <Avatar />
          )}  
        </IconButton>  
      </Link>  
    </Toolbar>  
  </AppBar>  
  );
}
