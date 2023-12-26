import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button,  } from '@mui/material';
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
              ML
            </Typography>
          </Box>

          <Box sx={{ justifyContent: 'space-around', flexGrow: 0.5, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Inicio
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Acerca de mí
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Servicios
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Proyectos
            </Button>
            <Button
              key='Contact me'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Contáctame
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
