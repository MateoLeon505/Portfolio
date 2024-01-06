import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import styles from './NavBar.module.css';


const NavBar = ()  => {

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

    <Navbar expand="lg" className={styles.navbar}>
      <Container >
        <Navbar.Brand href="#home" className={styles.brand}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className={styles.navbarTogglerIcon}></span>
        </Navbar.Toggle> */}
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
          {/* <span className={styles.navbar_text}>
            <div className={styles.social_icon}>
              <a href="#"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="#"><img src={navIcon2} alt="Github" /></a>
              <a href="#"><img src={navIcon3} alt="StackOverflow" /></a>
              <button className={styles.connect} onClick={()=>alert('connect') }><span>Let´s connect</span></button>
            </div>
          </span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
