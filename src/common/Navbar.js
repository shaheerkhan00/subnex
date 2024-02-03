// Navbar.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LogoImage from './logo.png';
import NavbarStyles from './NavbarStyles';

function Navbar() {
  return (
    <AppBar position="static" sx={NavbarStyles.root}>
      <Toolbar>
        {/* Logo Image on the left */}
        <img src={LogoImage} alt="Logo" style={{ width: '200px', height: '64px', ...NavbarStyles.logoImage }} />

        {/* App title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Your app title */}
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit" href="#" sx={{ ...NavbarStyles.link, ...NavbarStyles.homeLink }}>
          Home
        </Button>
        <Button color="inherit" href="#" sx={{ ...NavbarStyles.link, ...NavbarStyles.aboutUsLink }}>
          About Us
        </Button>
        <Button color="inherit" href="#" sx={{ ...NavbarStyles.link, ...NavbarStyles.contactUsLink }}>
          Contact Us
        </Button>

        {/* Sign Up Button */}
        <Button variant="outlined" color="inherit" href="#" sx={NavbarStyles.signUpButton}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
