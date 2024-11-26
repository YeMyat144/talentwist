"use client";
import { useState } from "react";
import { Avatar, AppBar, Toolbar, Box, IconButton, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export default function Header({ avatar }) {
  const location = useLocation();
  const theme = useTheme();
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
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 3 }}>
      <Toolbar sx={{ justifyContent: "space-around", px: 3 }}>
        {/* Home Icon */}
        <Box>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <IconButton
              onClick={() => handleIconClick("home")}
              sx={{
                color: currentPath === "/home" ? theme.palette.primary.main : theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.dark,
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <HomeIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>

        {/* Favorite Icon */}
        <Box>
          <Link to="/favorite" style={{ textDecoration: "none" }}>
            <IconButton
              onClick={() => handleIconClick("favorite")}
              sx={{
                color: currentPath === "/favorite" ? theme.palette.primary.main : theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.dark,
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <FavoriteIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>

        {/* Profile Icon */}
        <Box>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <IconButton
              onClick={() => handleIconClick("profile")}
              sx={{
                color: currentPath === "/profile" ? theme.palette.primary.main : theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.dark,
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              {avatar ? (
                <Avatar
                  src={avatar}
                  alt="User Avatar"
                  sx={{
                    width: 40,
                    height: 40,
                    border: currentPath === "/profile" ? `2px solid ${theme.palette.primary.main}` : "none",
                  }}
                />
              ) : (
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    border: currentPath === "/profile" ? `2px solid ${theme.palette.primary.main}` : "none",
                  }}
                >
                  <PersonIcon />
                </Avatar>
              )}
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
