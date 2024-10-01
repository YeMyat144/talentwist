"use client";  
import { createTheme } from "@mui/material/styles";  

const theme = createTheme({  
  palette: {  
    primary: {  
      main: "#000435",
    },  
    secondary: {  
      main: "#0A2472", 
    },  
    background: {  
      default: "#1A1A1A", // Very Dark Gray  
      paper: "#2A2A2A", // Dark Gray  
    },  
    text: {  
      primary: "#FFFFFF", // White  
      secondary: "#FF4C4C", // Bright Red  
    },  
    error: {  
      main: "#0000ff", // Cyan
    },  
    warning: {  
      main: "#FFA000", // Amber  
    },  
    info: {  
      main: "#B0BEC5", // Light Grey  
    },  
    success: {  
      main: "#4CAF50", // Green  
    },  
    disabled: {  
      main: "#8D8D8D", // Grey  
    },  
  },  
});  

export default theme;