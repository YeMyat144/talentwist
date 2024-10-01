"use client";
import { useState } from "react";
import { Avatar, AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person"; // Import default icon for Avatar
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
                    color: clickedIcons.profile
                      ? theme.palette.primary.main
                      : currentPath === "/profile"
                      ? theme.palette.error.main
                      : "#000",
                    stroke: currentPath === "/profile" ? theme.palette.error.main : "none",
                    strokeWidth: currentPath === "/profile" ? "1.5" : "0",
                    backgroundColor: "transparent", // Remove grey background
                  }}
                  src={avatar}
                />
              ) : (
                <Avatar
                  sx={{
                    color: clickedIcons.profile
                      ? theme.palette.primary.main
                      : currentPath === "/profile"
                      ? theme.palette.error.main
                      : "#000",
                    stroke: currentPath === "/profile" ? theme.palette.error.main : "none",
                    strokeWidth: currentPath === "/profile" ? "1.5" : "0",
                    backgroundColor: "transparent", // Remove grey background
                  }}
                >
                  <PersonIcon />
                </Avatar>
              )}
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </Box>
  );
}
