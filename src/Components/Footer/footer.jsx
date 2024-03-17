import React from "react";
import Info from "../info/Info.jsx";
import { Typography } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Info />
      </div>
      <div>
        <div>
          <Typography variant="h6" align="center">
            Mateo León
          </Typography>
        </div>
        <div className={styles.iconsContainer}>
          <a
            href="https://www.linkedin.com/in/mateo-le%C3%B3n-097b57268/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/MateoLeon505"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <Typography variant="body2" align="center">
          Copyright ©2024
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
