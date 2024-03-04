import React from "react";
import { Box, Typography } from "@mui/material";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; 
import { IoLogoWhatsapp } from "react-icons/io";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSections}>
        <div>
          <Typography variant="body1" align="center" >
            <BsFillInfoCircleFill/> Info +
          </Typography>
        </div>
        <div>
          <Typography variant="h6" align="center" >
            Mateo León
          </Typography>
        </div>
        <div className={styles.iconsContainer}>
            <FaLinkedin className={styles.icon}/>
            <FaGithub className={styles.icon}/>
            {/* <IoLogoWhatsapp className={styles.icon}/>
            <SiGmail className={styles.icon}/> */}
        </div>
      </div>
      <div className={styles.copyright}>
        <Typography variant="body2" align="center" >
          Copyright ©2024 todos los derechos reservados
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
