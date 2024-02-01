import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Grid, Typography, Button } from '@mui/material';
import styles from './projects.module.css';

const Projects = () => {

  const navigate = useNavigate();

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.projectsContainer}>
        <Typography  variant="h5" gutterBottom align='center' className={styles.title}>
          Herramientas |
          <span style={{ color: '#92E3A9' }}> Desarrollo</span>
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' 
          className={styles.gridContainer} >
                        <Grid item xs={2} sm={4} md={4} className={styles.gridTool}>
              <span>Hoplaa</span>
            </Grid>
          {/* {devTools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridTool}>
              <span>{tool.image1}</span>
            </Grid>
          ))} */}
        </Grid>
        <Typography  variant="h5" gutterBottom align='center' className={styles.title} >
          Herramientas |
          <span style={{ color: '#92E3A9' }}> Gestión</span>
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' 
          className={styles.gridContainer}>
          {/* {tools.map((tool, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} className={styles.gridTool}>
              <span>{tool.image1}</span>
            </Grid>
          ))} */}
        </Grid>
        <Typography variant='body1' align='center'>
          <Button className={styles.projects} variant="contained" onClick={()=>navigate('/projects')}
            style={{ background: '#ECEFF1', color: '#121212' }}>
            Proyectos 
          </Button>
        </Typography>
      </Box>
    );
};

export default Projects;