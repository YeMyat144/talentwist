"use client";
import { useState } from "react";
import { Avatar, AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import theme from "./theme";

export default function Header({ avatar }) {
  const location = useLocation();

  // Determine the active path
  const currentPath = location.pathname;

  return (
    <Box position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box display="flex" alignItems="center">
          <Link to="/home" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <IconButton color="inherit">
              <HomeIcon
                sx={{
                  color: currentPath === "/home" ? theme.palette.error.main : '#000',
                }}
              />
            </IconButton>
          </Link>
          <Link to="/favorite" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <IconButton color="inherit">
              <FavoriteIcon
                sx={{
                  color: currentPath === "/favorite" ? theme.palette.error.main : '#000',
                }}
              />
            </IconButton>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <IconButton color="inherit">
              {avatar ? (
                <Avatar
                  sx={{
                    border: currentPath === "/profile" ? `2px solid ${theme.palette.error.main}` : 'none',
                  }}
                  src={avatar}
                />
              ) : (
                <Avatar
                  sx={{
                    border: currentPath === "/profile" ? `2px solid ${theme.palette.error.main}` : 'none',
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
