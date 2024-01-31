import { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import styles from './services.module.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Services = () => {

  const devTools = [
    {name: 'HTML', image1: <FaHtml5 style={{ fontSize: '100px' }} classname={styles.icon}/>},
    {name: 'CSS', image1: <FaCss3Alt style={{ fontSize: '100px' }} />},
    {name: 'JS', image1: <SiJavascript style={{ fontSize: '100px' }} />},
    {name: 'React', image1: <FaReact style={{ fontSize: '100px' }} />},
    {name: 'Redux', image1: <SiRedux style={{ fontSize: '100px' }} />},
    {name: 'PGAdmin', image1: <SiPostgresql style={{ fontSize: '100px' }} /> },
    {name: 'SQL', image1: FaHtml5}
  ];

  const tools = [
    {name: 'HTML', image1: <FaHtml5 style={{ fontSize: '100px' }} classname={styles.icon}/>},
    {name: 'CSS', image1: <FaCss3Alt style={{ fontSize: '100px' }} />},
    {name: 'JS', image1: <SiJavascript style={{ fontSize: '100px' }} />},
    {name: 'React', image1: <FaReact style={{ fontSize: '100px' }} />},
    {name: 'Redux', image1: <SiRedux style={{ fontSize: '100px' }} />},
    {name: 'PGAdmin', image1: <SiPostgresql style={{ fontSize: '100px' }} /> },
    {name: 'SQL', image1: FaHtml5}
  ];

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.skillsContainer}>
        <Typography  variant="h2" gutterBottom align='center' className={styles.title}>
          Desarrollo
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' >
          {devTools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridTool}>
              <span>{tool.image1}</span>
              {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {tool.name}
              </Typography> */}
            </Grid>
          ))}
        </Grid>
        <Typography  variant="h2" gutterBottom align='center' className={styles.title} >
          Herramientas
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' >
          {devTools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridTool}>
              <span>{tool.image1}</span>
              {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {tool.name}
              </Typography> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
}

export default Services;