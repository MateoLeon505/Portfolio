import { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import styles from './services.module.css';
import html5White from '../../assets/img/skills/html5-white.svg';
import html5Green from '../../assets/img/skills/html5-green.svg';
import css3White from '../../assets/img/skills/css3-white.svg';
import css3Green from '../../assets/img/skills/css3-green.svg';
import jsWhite from '../../assets/img/skills/js-white.svg';
import jsGreen from '../../assets/img/skills/js-green.svg';
import reactWhite from '../../assets/img/skills/react-white.svg';
import reactGreen from '../../assets/img/skills/react-green.svg';
import reduxWhite from '../../assets/img/skills/redux-white.svg';
import reduxGreen from '../../assets/img/skills/redux-green.svg';

const Services = () => {

  const devTools = [
    {name: 'HTML', image1: html5White, image2: html5Green},
    {name: 'CSS', image1: css3White, image2: css3Green},
    {name: 'JS', image1: jsWhite, image2: jsGreen},
    {name: 'React', image1: reactWhite, image2: reactGreen},
    {name: 'Redux', image1: reduxWhite, image2: reduxGreen},
    {name: 'PGAdmin', image1: html5White, image2: html5Green},
    {name: 'SQL', image1: html5White, image2: html5Green}
  ];

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.skillsContainer}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' >
          {devTools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridTool}>
              <img src={tool.image1} alt={tool.name} className={styles.icon}/>
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