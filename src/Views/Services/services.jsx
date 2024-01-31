import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Grid, Typography, Button } from '@mui/material';
import styles from './services.module.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiFillSlackCircle } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaTrello } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const Services = () => {

  const navigate = useNavigate();

  const devTools = [
    {name: 'HTML', image1: <FaHtml5 style={{ fontSize: '70px' }} classname={styles.icon}/>},
    {name: 'CSS', image1: <FaCss3Alt style={{ fontSize: '70px' }} />},
    {name: 'JS', image1: <SiJavascript style={{ fontSize: '70px' }} />},
    {name: 'React', image1: <FaReact style={{ fontSize: '70px' }} />},
    {name: 'Redux', image1: <SiRedux style={{ fontSize: '70px' }} />},
    {name: 'PGAdmin', image1: <SiPostgresql style={{ fontSize: '70px' }} /> },
    {name: 'SQL', image1: FaHtml5}
  ];

  const tools = [
    {name: 'VSCode', image1: <SiVisualstudiocode style={{ fontSize: '70px' }} classname={styles.icon}/>},
    {name: 'GitHub', image1: <FaGithub style={{ fontSize: '70px' }} />},
    {name: 'Slack', image1: <AiFillSlackCircle style={{ fontSize: '70px' }} />},
    {name: 'GHProjects', image1: <GrProjects style={{ fontSize: '70px' }} />},
    {name: 'Trello', image1: <FaTrello style={{ fontSize: '70px' }} />},
    {name: 'Git', image1: <FaGitAlt style={{ fontSize: '70px' }} /> },
  ];

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.skillsContainer}>
        <Typography  variant="h5" gutterBottom align='center' className={styles.title}>
          Herramientas |
          <span style={{ color: '#92E3A9' }}> Desarrollo</span>
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' 
          className={styles.gridContainer} >
          {devTools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridTool}>
              <span>{tool.image1}</span>
              {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {tool.name}
              </Typography> */}
            </Grid>
          ))}
        </Grid>
        <Typography  variant="h5" gutterBottom align='center' className={styles.title} >
          Herramientas |
          <span style={{ color: '#92E3A9' }}> Gestión</span>
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' 
          className={styles.gridContainer}>
          {tools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridTool}>
              <span>{tool.image1}</span>
              {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {tool.name}
              </Typography> */}
            </Grid>
          ))}
        </Grid>
        <Typography variant='body1' align='center'>
          <Button className={styles.projects} variant="contained" onClick={()=>navigate('/projects')}
            style={{ background: '#ECEFF1', color: '#121212' }}>
            Proyectos <IntegrationInstructionsIcon/>
          </Button>
        </Typography>
      </Box>
    );
}

export default Services;