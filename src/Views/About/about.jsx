import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PsychologyIcon from '@mui/icons-material/Psychology';
import styles from  './about.module.css';
import Me from '../../assets/img/Me.jpg';
import Wavey from "../../assets/img/wavey-fingerprint.svg";

const About = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('1');

    const handleChange = (event, value) => {
      setValue(value);
    };

    return (   
        <section className={styles.container}>
            <Grid
                container
                direction='row'
                className={styles.gridContainer}>
                <Grid item xs={4} md='' xl=''>
                    <Card sx={{ minWidth: 275, height:480 }} className={styles.mainCard}>
                        <CardContent>
                            <Stack className={styles.header}>
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
                                <a href="https://wa.me/3245310156" className={styles.anchor} target='blank'>
                                    <PhoneIcon style={{ color: '#92E3A9' }}/><WhatsAppIcon style={{ color: '#92E3A9' }}/> (+57) 3245310153 
                                </a>
                            </Typography>    
                            <Typography variant="body2">
                                <a href="mailto:mateolt505@gmail.com" className={styles.anchor} target='blank'>
                                    <EmailIcon style={{ color: '#92E3A9' }}/> mateolt505@gmail.com 
                                </a>
                            </Typography>
                            <span className={styles.navbar_text}> 
                                <div className={styles.social_icon}>
                                    <a href="https://www.linkedin.com/in/mateo-le%C3%B3n-097b57268/" target='blank'>
                                        <LinkedInIcon className={styles.socialMedia}/>
                                    </a>
                                    <a href="https://github.com/MateoLeon505" target='blank'>
                                        <GitHubIcon className={styles.socialMedia}/>
                                    </a>
                                </div> 
                            </span>
                        </CardContent>
                        <CardActions>
                            <Button className={styles.connect} onClick={()=>navigate('/skills')}>
                                <PsychologyIcon/>Habilidades
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} md='' xl=''>
                    <Card sx={{ minWidth: 275, height:480 }} className={styles.secondCard}>
                        <CardContent>
                            <div>
                                <Tabs value={value} onChange={handleChange}
                                    textColor="#92E3A9"
                                    color="#92E3A9">
                                    <Tab label="Educación" value='1' 
                                        className={value === "1" ? styles.tabSelected : styles.tab}
                                    />
                                    <Tab label="Experiencia" value='2'                                        
                                        className={value === "2" ? styles.tabSelected : styles.tab}
                                    />
                                </Tabs>
                                {value === "1" && (
                                    <Paper className={styles.paper}>
                                        <Typography variant='body1' align='center' gutterBottom >
                                            Soy estudiante de ingeniería multimedia y desarrollador web fullstack.
                                        </Typography>
                                        <Typography variant='body1' align='center' gutterBottom>
                                            <b>Mi enfoque está en el desarrollo frontend, donde trabajo para crear soluciones web 
                                            elegantes y funcionales que brinden una experiencia única a los usuarios.</b>
                                        </Typography>
                                    </Paper>
                                )}
                                {value === "2" && (
                                    <Paper className={styles.paper}>
                                        <Typography variant='body1' align='center'>
                                            Mis objetivos profesionales son crecer como desarrollador web, explorar el emocionante 
                                            mundo del desarrollo de aplicaciones móviles y contribuir a proyectos que generen un 
                                            impacto positivo en la sociedad.
                                        </Typography>
                                    </Paper>
                                )}
                            </div>
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