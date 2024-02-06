import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Grid, 
  Typography, 
  Button, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  CardActions,
  Collapse, 
  IconButton, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import lasEncinasBoutique from '../../assets/img/projects/Las-Encinas-Boutique.png';
import { FaGithub, FaYoutube  } from "react-icons/fa";
import raceHub from '../../assets/img/projects/Race-Hub.png';
import { IoLogoVercel } from "react-icons/io5";
import styles from './projects.module.css';

const Projects = () => {

  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (id) => {
    id === '1' ? setExpanded(!expanded)
    : setExpanded2(!expanded2);
  };

  const projects = [
    {name: 'RaceHub', date: 'Octubre, 2023', image: raceHub, technologies: 'React, Redux, Node, Express y Sequelize', 
      repo: 'https://github.com/MateoLeon505/PI-Drivers', deploy: 'https://deploy-eight-xi.vercel.app/', video: '',
      description: 'SPA desarrollada con una API con pilotos de F1. Este fue un proyecto individual para el bootcamp de SOYHENRY.',
      expanded: expanded,
      id: '1', title: 'Desarrollo del proyecto:', details:''
    },
    {name: 'Las Encinas Boutique', date: 'Noviembre, 2023', image: lasEncinasBoutique, technologies:'', 
      repo:'https://github.com/thomasrey99/Las-Encinas-Boutique-', deploy:'https://las-encinas-boutique-omega.vercel.app/home', 
      video: 'https://www.youtube.com/watch?v=ld3ZKo4DfjE&t=58s',
      description: 'E-Commerce de chocolatería artesanal ubicada en Tucumán. Fue el proyecto grupal final del bootcamp de SOYHENRY.',
      expanded: expanded2,
      id: '2', title: 'Participación en el proyecto:', details:''
    }
  ];

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.projectsContainer}>
              <Typography variant='body1' align='center'>
          <Button className={styles.bontactButton} variant="contained" onClick={()=>navigate('/contact')}
              style={{ background: '#ECEFF1', color: '#121212' }}>
              Contáctame
          </Button>
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' 
          className={styles.gridContainer} >
            {projects.map((project) => (
              <Grid item xs={2} sm={4} md={4} className={styles.gridProject}>
                <Card sx={{ maxWidth: 370 }}>
                  <CardHeader
                    title={project.name}
                    subheader={project.date}
                  />
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.name}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton> */}
                      <IconButton aria-label="add to favorites">
                        <a target='blank' href={project.repo}>
                          <FaGithub />                        
                        </a>
                      </IconButton>
                      <IconButton aria-label="add to favorites">
                        <a target='blank' href={project.deploy}>
                          <IoLogoVercel />
                        </a>
                      </IconButton>
                      {project.video &&                       
                      <IconButton aria-label="add to favorites">
                        <a target='blank' href={project.video}>
                          <FaYoutube/>
                        </a>
                      </IconButton>}
                      <ExpandMore
                        expand={project.expanded}
                        onClick={()=>handleExpandClick(project.id)}
                        aria-expanded={project.expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={project.expanded} timeout="auto" unmountOnExit id={project.id}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom align='center'>{project.title}</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                          aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                          Heat oil paella pan or a large, deep skillet over
                          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                          occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                          large plate and set aside, leaving chicken and chorizo in the pan. Add
                          pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                          stirring often until thickened and fragrant, about 10 minutes. Add
                          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                      </CardContent>
                    </Collapse>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    );
};

export default Projects;