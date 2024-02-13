import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/img/logo.svg';
import styles from './NavBar.module.css';


const NavBar = ()  => {

  const navigate = useNavigate();
  const location = useLocation();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    // const [ activeLink, setActiveLink ] = useState('home');
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
    // setActiveLink(value);
    navigate(value);
    // handleCloseNavMenu();
  }


  return (
    <AppBar className={ scrolled ? styles.navbarScrolled : styles.navbar }>
        <Toolbar disableGutters>
          {/* Small - Medium */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', xl:'none' } }}
            display="flex" justifyContent="space-between" width="100%">
            <IconButton>
              <img src={logo} alt="Logo" className={styles.logo}/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon className={styles.menuIcon}/>
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
              <MenuItem sx={{ bgcolor: 'black' }} onClick={()=> onUpdateActiveLink('')}>
                <Button
                  className={ location.pathname === '/' ? styles.active_navbarlinkResponsive : styles.navbarlinkResponsive }
                  // sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  <IconButton size="small"  sx={{ color: location.pathname === '/' ? '#008080' : '#FFFFFF' }}>
                      <HomeIcon />
                  </IconButton>
                  Inicio
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }} onClick={()=> onUpdateActiveLink('about')}>
                <Button
                  className={ location.pathname === '/about' ? styles.active_navbarlinkResponsive : styles.navbarlinkResponsive }
                  // sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  <IconButton size="small"  sx={{ color: location.pathname === '/about' ? '#008080' : '#FFFFFF' }}>
                    <ArticleIcon/>
                  </IconButton>
                  Sobre mí
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }} onClick={()=> onUpdateActiveLink('skills')}> 
                <Button
                  className={ location.pathname === '/skills' ? styles.active_navbarlinkResponsive : styles.navbarlinkResponsive }
                  // sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  <IconButton size="small"  sx={{ color: location.pathname === '/skills' ? '#008080' : '#FFFFFF' }}>
                    <PsychologyIcon/>
                  </IconButton>
                  Habilidades
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }} onClick={()=> onUpdateActiveLink('projects')}>
                <Button
                  className={ location.pathname === '/projects' ? styles.active_navbarlinkResponsive : styles.navbarlinkResponsive }
                  // sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  <IconButton size="small"  sx={{ color: location.pathname === '/projects' ? '#008080' : '#FFFFFF' }}>
                    <IntegrationInstructionsIcon/>
                  </IconButton>
                  Proyectos
                </Button>
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'black', color: 'white' }} onClick={()=> onUpdateActiveLink('contact')}>
                <Button
                  className={ location.pathname === '/contact' ? styles.active_navbarlinkResponsive : styles.navbarlinkResponsive }
                  // sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  <IconButton size="small"  sx={{ color: location.pathname === '/contact' ? '#008080' : '#FFFFFF' }}>
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
            <IconButton>
              <img src={logo} alt="Logo" className={styles.logo}/>
            </IconButton>
            <Box display="flex">
              <Button
                className={ location.pathname === '/' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <IconButton size="small"  sx={{ color: location.pathname === '/' ? '#92E3A9' : '#FFFFFF' }}>
                    <HomeIcon />
                </IconButton>
                Inicio
              </Button>
              <Button
                className={ location.pathname === '/about' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('about')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <IconButton size="small"  sx={{ color: location.pathname === '/about' ? '#92E3A9' : '#FFFFFF' }}>
                  <ArticleIcon/>
                </IconButton>
                Sobre mí
              </Button>
              <Button
                className={ location.pathname === '/skills' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('skills')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <IconButton size="small"  sx={{ color: location.pathname === '/skills' ? '#92E3A9' : '#FFFFFF' }}>
                  <PsychologyIcon/>
                </IconButton>
                Habilidades
              </Button>
              <Button
                className={ location.pathname === '/projects' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('projects')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <IconButton size="small"  sx={{ color: location.pathname === '/projects' ? '#92E3A9' : '#FFFFFF' }}>
                  <IntegrationInstructionsIcon/>
                </IconButton>
                Proyectos
              </Button>
              <Button
                className={ location.pathname === '/contact' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('contact')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <IconButton size="small"  sx={{ color: location.pathname === '/contact' ? '#92E3A9' : '#FFFFFF' }}>
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
