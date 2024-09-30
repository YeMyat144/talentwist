"use client";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";  
import { Link } from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import theme from "./theme";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>  
    <Toolbar>  
      <Link to="/home" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>  
      <Link to="/favorite" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Favorite</Link>  
      <Box sx={{ flexGrow: 1 }} /> 
      <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>  
        <IconButton color="inherit">  
          <AccountCircleIcon />  
        </IconButton>  
      </Link>  
    </Toolbar>  
  </AppBar>  
  );
}
