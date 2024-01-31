import { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import styles from './services.module.css';

import { FaHtml5 } from "react-icons/fa";

const Services = () => {

  const devTools = [
    {name: 'HTML', image1: <FaHtml5 style={{ fontSize: '100px' }}/>},
    {name: 'CSS', image1: FaHtml5},
    {name: 'JS', image1: FaHtml5},
    {name: 'React', image1: FaHtml5},
    {name: 'Redux', image1: FaHtml5},
    {name: 'PGAdmin', image1: FaHtml5},
    {name: 'SQL', image1: FaHtml5}
  ];

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.skillsContainer}>
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