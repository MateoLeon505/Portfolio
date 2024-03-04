import React from "react";
import { Typography } from "@mui/material";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Typography variant="body1" align="center">
          <BsFillInfoCircleFill /> Info +
        </Typography>
      </div>
      <div>
        <div>
          <Typography variant="h6" align="center">
            Mateo León
          </Typography>
        </div>
        <div className={styles.iconsContainer}>
          <FaLinkedin className={styles.icon} />  
          <FaGithub className={styles.icon} />
          <TiSocialLinkedinCircular className={styles.icon} />
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
