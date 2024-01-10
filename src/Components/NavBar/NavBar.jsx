import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  Box,
  Container,
  Avatar,
  Tooltip,
} from '@mui/material';

import { MenuIcon } from '@mui/icons-material';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import styles from './NavBar.module.css';


const NavBar = ()  => {

  //const pages = ['Inicio', 'Sobre mí', 'Skills', 'Proyectos', 'Contacto'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  //------------------

  const [ activeLink, setActiveLink ] = useState('home');
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      if (window.scroll > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return window.removeEventListener("scroll", onScroll);

  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
          {/* <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <div className={styles.navigation}>
          <div className={styles.brand}>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" className={styles.logo}/>
            </Navbar.Brand>
          </div>
          <div className={styles.items}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#home" className={ activeLink === 'home' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('home')}>
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className={ activeLink === 'about' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('about')}>
                  About
                </Nav.Link>
                <Nav.Link href="#skills" className={ activeLink === 'skills' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('skills')}>
                  Skills
                </Nav.Link>
                <Nav.Link href="#projects" className={ activeLink === 'projects' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('projects')}>
                  Proyects
                </Nav.Link>
                <Nav.Link href="#contact" className={ activeLink === 'contact' ? styles.active_navbarlink : styles.navbarlink }
                onClick={()=> onUpdateActiveLink('contact')}>
                  Contact
                </Nav.Link>
              </Nav>
              <span className={styles.navbar_text}> */}
                {/* <div className={styles.social_icon}>
                  <a href="#"><img src={navIcon1} alt="Linkedin" /></a>
                  <a href="#"><img src={navIcon2} alt="Github" /></a>
                  <a href="#"><img src={navIcon3} alt="StackOverflow" /></a>
                  <button className={styles.connect} onClick={()=>alert('connect') }><span>Let´s connect</span></button>
                </div> */}
              {/* </span>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar> */}
      
      <AppBar className={styles.navbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div className={styles.navigation}>
              <div className={styles.brand}>
                <IconButton href="#home">
                  <img src={logo} alt="Logo" className={styles.logo}/>
                </IconButton>
              </div>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                <Button
                  href="#home"
                  className={ activeLink === 'home' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('home')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Inicio
                </Button>
                <Button
                  href="#about"
                  className={ activeLink === 'about' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('about')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Sobre mí
                </Button>
                <Button
                  href="#skills"
                  className={ activeLink === 'skills' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('skills')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Skills
                </Button>
                <Button
                  href="#projects"
                  className={ activeLink === 'projects' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('projects')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Proyectos
                </Button>
                <Button
                  href="#contact"
                  className={ activeLink === 'contact' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('contact')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Contacto
                </Button>
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', xl: 'flex' } }}>
                <Button
                  href="#home"
                  className={ activeLink === 'home' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('home')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Inicio
                </Button>
                <Button
                  href="#about"
                  className={ activeLink === 'about' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('about')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Sobre mí
                </Button>
                <Button
                  href="#skills"
                  className={ activeLink === 'skills' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('skills')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Skills
                </Button>
                <Button
                  href="#projects"
                  className={ activeLink === 'projects' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('projects')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Proyectos
                </Button>
                <Button
                  href="#contact"
                  className={ activeLink === 'contact' ? styles.active_navbarlink : styles.navbarlink }
                  onClick={()=> onUpdateActiveLink('contact')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Contacto
                </Button>
              </Box>
              <span className={styles.navbar_text}> 
                 <div className={styles.social_icon}>
                  <a href="#"><img src={navIcon1} alt="Linkedin" /></a>
                  <a href="#"><img src={navIcon2} alt="Github" /></a>
                  <a href="#"><img src={navIcon3} alt="StackOverflow" /></a>
                  <button className={styles.connect} onClick={()=>alert('connect') }><span>Let´s connect</span></button>
                </div> 
              </span>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
