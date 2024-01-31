import * as React from 'react';
import { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import styles from './services.module.css';
import html5White from '../../assets/img/skills/html5-white.svg';
import html5Green from '../../assets/img/skills/html5-green.svg';
import css3White from '../../assets/img/skills/css3-white.svg';
import css3Green from '../../assets/img/skills/css3-green.svg';

const Services = () => {

  const devTools = [
    {name: 'HTML', image1: html5White, image2: html5Green},
    {name: 'CSS', image1: css3White, image2: css3Green},
    {name: 'JS', image1: html5White, image2: html5Green},
    {name: 'React', image1: html5White, image2: html5Green},
    {name: 'Redux', image1: html5White, image2: html5White},
    {name: 'PGAdmin', image1: html5White, image2: html5Green},
    {name: 'SQL', image1: html5White, image2: html5Green}
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.skillsContainer}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
          <img src={html5Green} alt="" className={styles.icon}/>
          <img src={css3White} alt="" className={styles.icon}/>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {devTools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.cardTool}>
              <img src={tool.image1} alt={tool.name} />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {tool.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
}

export default Services;