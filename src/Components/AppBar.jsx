import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

const NavBar = ()  => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ justifyContent: 'flex-start', flexGrow: 0.5, display: { xs: 'none', md: 'flex' } }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              LOGO
            </Typography>
          </Box>

          <Box sx={{ justifyContent: 'space-around', flexGrow: 0.5, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key='Home'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Home
            </Button>
            <Button
              key='About'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              About
            </Button>
            <Button
              key='Services'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Services
            </Button>
            <Button
              key='Projects'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Projects
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
