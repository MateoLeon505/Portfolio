import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PsychologyIcon from '@mui/icons-material/Psychology';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ContactMailIcon from '@mui/icons-material/ContactMail';
// import { InfoIcon, HomeIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import styles from './NavBar.module.css';


const NavBar = ()  => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    handleCloseNavMenu();
  }

  return (
    <AppBar className={ scrolled ? styles.navbarScrolled : styles.navbar }>
        <Toolbar disableGutters>
          {/* Small - Medium */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', xl:'none' } }}
            display="flex" justifyContent="space-between" width="100%">
            <IconButton href="#home">
              <img src={logo} alt="Logo" className={styles.logo}/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'block', md: 'block' },
              }}
            >
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }}>
                <Button
                  href="#home"
                  // className={ activeLink === 'home' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('home')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <IconButton size="0.2rem"  sx={{ color: 'white' }}>
                    <HomeIcon />
                  </IconButton>
                  Inicio
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }}>
                <Button
                  href="#about"
                  // className={ activeLink === 'about' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('about')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <IconButton size="small"  sx={{ color: 'white' }}>
                    <ArticleIcon/>
                  </IconButton>
                  Sobre mí
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }}>
                <Button
                  href="#skills"
                  // className={ activeLink === 'skills' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('skills')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <IconButton size="small"  sx={{ color: 'white' }}>
                    <PsychologyIcon/>
                  </IconButton>
                  Habilidades
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }}>
                <Button
                  href="#projects"
                  // className={ activeLink === 'projects' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('projects')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <IconButton size="small"  sx={{ color: 'white' }}>
                    <IntegrationInstructionsIcon/>
                  </IconButton>
                  Proyectos
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }}>
                <Button
                  href="#contact"
                  // className={ activeLink === 'contact' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('contact')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <IconButton size="small"  sx={{ color: 'white' }}>
                    <ContactMailIcon/>
                  </IconButton>
                  Contacto
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          {/* Large */}
          <Box sx={{ display: { xs: 'none', md: 'none', xl: 'flex' }}} 
            display="flex" justifyContent="space-between" width="100%">
            <IconButton href="#home">
              <img src={logo} alt="Logo" className={styles.logo}/>
            </IconButton>
            <Box display="flex">
              <Button
                href="#home"
                className={ activeLink === 'home' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('home')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <IconButton size="small"  sx={{ color: 'white' }}>
                    <HomeIcon />
                </IconButton>
                Inicio
              </Button>
            <Button
              href="#about"
              className={ activeLink === 'about' ? styles.active_navbarlink : styles.navbarlink }
              onClick={()=> onUpdateActiveLink('about')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <IconButton size="small"  sx={{ color: 'white' }}>
                <ArticleIcon/>
              </IconButton>
              Sobre mí
            </Button>
            <Button
              href="#skills"
              className={ activeLink === 'skills' ? styles.active_navbarlink : styles.navbarlink }
              onClick={()=> onUpdateActiveLink('skills')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <IconButton size="small"  sx={{ color: 'white' }}>
                <PsychologyIcon/>
              </IconButton>
              Habilidades
            </Button>
            <Button
              href="#projects"
              className={ activeLink === 'projects' ? styles.active_navbarlink : styles.navbarlink }
              onClick={()=> onUpdateActiveLink('projects')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <IconButton size="small"  sx={{ color: 'white' }}>
                <IntegrationInstructionsIcon/>
              </IconButton>
              Proyectos
            </Button>
            <Button
              href="#contact"
              className={ activeLink === 'contact' ? styles.active_navbarlink : styles.navbarlink }
              onClick={()=> onUpdateActiveLink('contact')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <IconButton size="small"  sx={{ color: 'white' }}>
                <ContactMailIcon/>
              </IconButton>
              Contacto
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
