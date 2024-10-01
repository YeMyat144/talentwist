"use client";
import { useState } from "react";
import { Avatar, AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import theme from "./theme";

export default function Header({ avatar }) {
  const location = useLocation();
  const [clickedIcons, setClickedIcons] = useState({});

  // Determine the active path
  const currentPath = location.pathname;

  // Handle click on icon to change its color
  const handleIconClick = (iconName) => {
    setClickedIcons((prevClickedIcons) => ({
      ...prevClickedIcons,
      [iconName]: !prevClickedIcons[iconName],
    }));
  };

  return (
    <Box position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box display="flex" alignItems="center">
          <Link to="/home" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <IconButton color="inherit" onClick={() => handleIconClick('home')}>
              <HomeIcon
                sx={{
                  color: clickedIcons.home
                    ? theme.palette.primary.main
                    : currentPath === "/home"
                    ? theme.palette.error.main
                    : "#000",
                  stroke: currentPath === "/home" ? theme.palette.error.main : "none",
                  strokeWidth: currentPath === "/home" ? "1.5" : "0",
                }}
              />
            </IconButton>
          </Link>

          <Link to="/favorite" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <IconButton color="inherit" onClick={() => handleIconClick('favorite')}>
              <FavoriteIcon
                sx={{
                  color: clickedIcons.favorite
                    ? theme.palette.primary.main
                    : currentPath === "/favorite"
                    ? theme.palette.error.main
                    : "#000",
                  stroke: currentPath === "/favorite" ? theme.palette.error.main : "none",
                  strokeWidth: currentPath === "/favorite" ? "1.5" : "0",
                }}
              />
            </IconButton>
          </Link>

          <Link to="/profile" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <IconButton color="inherit" onClick={() => handleIconClick('profile')}>
              {avatar ? (
                <Avatar
                  sx={{
                    border: currentPath === "/profile" ? `2px solid ${theme.palette.error.main}` : "none",
                    bgcolor: clickedIcons.profile ? theme.palette.primary.main : "inherit",
                  }}
                  src={avatar}
                />
              ) : (
                <Avatar
                  sx={{
                    border: currentPath === "/profile" ? `2px solid ${theme.palette.error.main}` : "none",
                    bgcolor: clickedIcons.profile ? theme.palette.primary.main : "inherit",
                  }}
                />
              )}
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </Box>
  );
}
