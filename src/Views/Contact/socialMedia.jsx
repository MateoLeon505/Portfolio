import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from './socialMedia.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const icons = [
    {icon: <FaLinkedin className={styles.icon}/>, link: 'https://www.linkedin.com/in/mateo-le%C3%B3n-097b57268/'},
    {icon: <FaGithub className={styles.icon}/>, link: 'https://github.com/MateoLeon505'},
    {icon: <FaStackOverflow className={styles.icon}/>, link: 'https://stackoverflow.com/users/22949021/mateo-leon'},
    {icon: <SiGmail className={styles.icon}/>, link: 'mailto:mateolt505@gmail.com'},
    {icon: <FaSlack className={styles.icon}/>, link: 'https://join.slack.com/t/mty-talk/shared_invite/zt-2cf0l55n9-T3joKkxbw~JvRRwl8XgF2Q'},
    {icon: <IoLogoWhatsapp className={styles.icon}/>, link: 'https://wa.me/3245310156'},
]

export default function SocialMedia() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {icons.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridChildren}>
            <div><a href={item.link} target='blank'>{item.icon}</a></div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
