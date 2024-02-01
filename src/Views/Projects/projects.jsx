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
  Avatar, 
  IconButton, } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import lasEncinasBoutique from '../../assets/img/projects/Las-Encinas-Boutique.png';
import raceHub from '../../assets/img/projects/Race-Hub.png';
import styles from './projects.module.css';

const Projects = () => {

  const navigate = useNavigate();

  const projects = [
    // {name: 'Rick & Morty', date: 'Mayo, 2023', image: lasEncinasBoutique, technologies:'', 
    //   repo:'https://github.com/MateoLeon505/rick_and_morty', deploy:'', description: ''
    // },
    {name: 'Pokemons', date: 'Septiembre, 2023', image: lasEncinasBoutique,  technologies:'', 
      repo:'https://github.com/MateoLeon505/PI-Pokemon-main', deploy:'', description: ''
    },
    {name: 'RaceHub', date: 'Octubre, 2023', image: raceHub, technologies: 'React, Redux, Node, Express y Sequelize', 
      repo: 'https://github.com/MateoLeon505/PI-Drivers', deploy: '', 
      description: 'SPA desarrollada con una API con pilotos de F1.'
    },
    {name: 'Las Encinas Boutique', date: 'Noviembre, 2023', image: lasEncinasBoutique, technologies:'', 
      repo:'https://github.com/thomasrey99/Las-Encinas-Boutique-', deploy:'', 
      description: 'E-Commerce para chocolatería artesanal ubicada en San Miguel de Tucuman'
    },
  ];

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

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
      <Box sx={{ flexGrow: 1 }} className={styles.projectsContainer}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' 
          className={styles.gridContainer} >
            {projects.map((project) => (
              <Grid item xs={2} sm={4} md={4} className={styles.gridProject}>
                <Card sx={{ maxWidth: 370 }}>
                  <CardHeader
                    // avatar={
                    //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    //     P
                    //   </Avatar>
                    // }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={project.name}
                    subheader={project.date}
                  />
                    <CardMedia
                      component="img"
                      // height="200"
                      image={project.image}
                      alt={project.name}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Descripción:</Typography>
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