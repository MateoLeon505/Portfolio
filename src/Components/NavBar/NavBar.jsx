import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";

import { HiMiniHome } from "react-icons/hi2";
import { MdAccountBox } from "react-icons/md";
import { PiFileCodeFill } from "react-icons/pi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { AiFillMessage } from "react-icons/ai";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/img/Logo.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const [scrolled, setScrolled] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
    navigate(value);
  };

  return (
    <AppBar
      className={[styles.navbar, scrolled && styles.navbarScrolled].join(" ")}
    >
      <Toolbar >
        {/* Small - Medium */}
        <Box
          sx={{ display: { xs: "flex", md: "flex", xl: "none" }}}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <IconButton sx={{ height: "5rem" }}>
            <img
              src={Logo}
              alt="Logo"
              className={styles.logo}
              onClick={() => navigate("/")}
            />
          </IconButton>
          <div className={styles.menuIcon}>
            <MenuIcon color="secondary" sx={{ fontSize: "2.7rem" }} />
            <ul>
              <li>
                <Button
                  onClick={() => onUpdateActiveLink("")}
                  style={{
                    color: "#ffffff",
                    width: "100%",
                  }}
                >
                  <HiMiniHome /> Inicio
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => onUpdateActiveLink("about")}
                  style={{
                    color: "#ffffff",
                    width: "100%",
                  }}
                >
                  <MdAccountBox /> {"                      "} Sobre mí
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => onUpdateActiveLink("skills")}
                  style={{
                    color: "#ffffff",
                    width: "100%",
                  }}
                >
                  <PiFileCodeFill /> Habilidades
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => onUpdateActiveLink("projects")}
                  style={{
                    color: "#ffffff",
                    width: "100%",
                  }}
                >
                  <PiMonitorPlayFill /> Proyectos
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => onUpdateActiveLink("contact")}
                  style={{
                    color: "#ffffff",
                    width: "100%",
                  }}
                >
                  <AiFillMessage /> Contacto
                </Button>
              </li>
            </ul>
          </div>
        </Box>
        {/* Large */}
        <Box
          sx={{ display: { xs: "none", md: "none", xl: "flex" } }}
          display="flex"
          justifyContent="space-around"
          width="100%"
        >
          <IconButton sx={{ height: "5rem" }}>
            <img
              src={Logo}
              alt="Logo"
              className={styles.logo}
              onClick={() => navigate("/")}
            />
          </IconButton>
          <Box display="flex">
            <Button
              className={
                location.pathname === "/"
                  ? styles.active_navbarlink
                  : styles.navbarlink
              }
              onClick={() => onUpdateActiveLink("")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <IconButton
                size="small"
                sx={{
                  color: location.pathname === "/" ? "#92E3A9" : "#FFFFFF",
                }}
              >
                <HiMiniHome />
              </IconButton>
              Inicio
            </Button>
            <Button
              className={
                location.pathname === "/about"
                  ? styles.active_navbarlink
                  : styles.navbarlink
              }
              onClick={() => onUpdateActiveLink("about")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <IconButton
                size="small"
                sx={{
                  color: location.pathname === "/about" ? "#92E3A9" : "#FFFFFF",
                }}
              >
                <MdAccountBox />
              </IconButton>
              Sobre mí
            </Button>
            <Button
              className={
                location.pathname === "/skills"
                  ? styles.active_navbarlink
                  : styles.navbarlink
              }
              onClick={() => onUpdateActiveLink("skills")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <IconButton
                size="small"
                sx={{
                  color:
                    location.pathname === "/skills" ? "#92E3A9" : "#FFFFFF",
                }}
              >
                <PiFileCodeFill />
              </IconButton>
              Habilidades
            </Button>
            <Button
              className={
                location.pathname === "/projects"
                  ? styles.active_navbarlink
                  : styles.navbarlink
              }
              onClick={() => onUpdateActiveLink("projects")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <IconButton
                size="small"
                sx={{
                  color:
                    location.pathname === "/projects" ? "#92E3A9" : "#FFFFFF",
                }}
              >
                <PiMonitorPlayFill />
              </IconButton>
              Proyectos
            </Button>
            <Button
              className={
                location.pathname === "/contact"
                  ? styles.active_navbarlink
                  : styles.navbarlink
              }
              onClick={() => onUpdateActiveLink("contact")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <IconButton
                size="small"
                sx={{
                  color:
                    location.pathname === "/contact" ? "#92E3A9" : "#FFFFFF",
                }}
              >
                <AiFillMessage />
              </IconButton>
              Contacto
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
