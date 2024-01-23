import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import styles from  './about.module.css';

const About = () => {

    return (   
        <section className={styles.container}>
            <Grid
                container
                direction='row'
                className={styles.gridContainer}>
                <Grid item xs={4} md='' xl=''>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} md='' xl=''>
                    <Typography variant='body1' align='center' gutterBottom >
                        Soy estudiante de ingeniería multimedia y desarrollador web fullstack.
                    </Typography>
                    <Typography variant='body1' align='center' gutterBottom>
                        <b>Mi enfoque está en el desarrollo frontend, donde trabajo para crear soluciones web 
                        elegantes y funcionales que brinden una experiencia única a los usuarios.</b>
                    </Typography>
                    <Typography variant='body1' align='center'>
                        Mis objetivos profesionales son crecer como desarrollador web, explorar el emocionante 
                        mundo del desarrollo de aplicaciones móviles y contribuir a proyectos que generen un 
                        impacto positivo en la sociedad.
                    </Typography>
                </Grid>
            </Grid>
            {/* <h2>Skills</h2>
            <table>
                <tr>
                    <td valign="top" width="33%">
                        <div align="center" className={styles.skills}>  
                            <a href="https://reactjs.org/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src={reactImage}
                                alt="React" height="80" />
                            </a>  
                            <a href="https://www.w3schools.com/css/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" 
                                alt="CSS3" height="50" />
                            </a>  
                            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" 
                                alt="HTML5" height="50" />
                            </a>  
                            <a href="https://www.javascript.com/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" 
                                alt="JavaScript" height="50" />
                            </a>  
                            <a href="https://redux.js.org/" target="_blank">
                                <img 
                                // style="margin: 10px"
                                src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="50" />
                            </a>  
                            <a href="https://nodejs.org/" 
                                target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" 
                                alt="Node.js" height="50" />
                            </a>  
                            <a href="https://expressjs.com/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" 
                                alt="Express.js" height="50" />
                            </a>  
                            <a href="https://github.com/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" 
                                alt="Git" height="50" />
                            </a> 
                        </div>
                    </td>
                </tr>
            </table>  */}
        </section>         
    );
}

export default About;