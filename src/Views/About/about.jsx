import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from  './about.module.css';
import Me from '../../assets/img/Me.jpg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

const About = () => {

    return (   
        <section className={styles.container}>
            <Grid
                container
                direction='row'
                className={styles.gridContainer}>
                <Grid item xs={4} md='' xl=''>
                    <Card sx={{ minWidth: 275, height:450 }} className={styles.mainCard}>
                        <CardContent>
                            <Stack>
                                <Avatar alt="Me" src={Me} sx={{ width: 80, height: 80, zoom: 2.0}} className={styles.avatar}/>
                            </Stack>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Bogotá, Colombia <LocationOnIcon/> 
                            </Typography>
                            <Typography variant="h5" component="div">
                                Mateo León
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Desarrollador Fullstack / Frontend & Estudiante de ingeniería multimedia
                            </Typography>
                            <Typography variant="body2">
                                <PhoneIcon style={{ color: '#92E3A9' }}/><WhatsAppIcon style={{ color: '#92E3A9' }}/> (+57) 3245310153 
                            </Typography>
                            <Typography variant="body2">
                                <EmailIcon style={{ color: '#92E3A9' }}/> mateolt505@gmail.com 
                            </Typography>
                            <Typography variant="body2">
                                
                            </Typography>
                            <span className={styles.navbar_text}> 
                                <div className={styles.social_icon}>
                                    <a href="#"><img src={navIcon1} alt="Linkedin" /></a>
                                    <a href="#"><img src={navIcon2} alt="Github" /></a>
                                    <a href="#"><img src={navIcon3} alt="StackOverflow" /></a>
                                </div> 
                            </span>
                        </CardContent>
                        <CardActions>
                            <button className={styles.connect} onClick={()=>alert('connect') }><span>Let´s connect</span></button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} md='' xl=''>
                    <Card sx={{ minWidth: 275, height:450 }} className={styles.secondCard}>
                        <CardContent>
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
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </section>         
    );
}

export default About;