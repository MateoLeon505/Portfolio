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
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
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
                            <Button className={styles.resume} onClick={()=>window.open('https://docs.google.com/document/d/e/2PACX-1vSzKjJ3hAiBzIkVdRxHXcX22_eJR9VlFzltUmj-XaHPhZi-jXz0Ljn6c_xFuHMedvXoqWKJgqQTcnV9/pub', '_blank')}>
                                <DocumentScannerIcon/>Curriculum
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} md='' xl=''>
                    <Card sx={{ minWidth: 275, height:480 }} className={styles.secondCard}>
                        <CardContent>
                            <div>
                                <Tabs value={value} onChange={handleChange}
                                    // textColor="#92E3A9"
                                    >
                                    <Tab label="Educación" value='1' 
                                        className={value === "1" ? styles.tabSelected : styles.tab}
                                    />
                                    <Tab label="Experiencia" value='2'                                        
                                        className={value === "2" ? styles.tabSelected : styles.tab}
                                    />
                                </Tabs>
                                {value === "1" && (
                                    <Paper className={styles.paper}>
                                        <Typography variant='h5' align='center'  style={{ color: '#92E3A9' }}>
                                            Desarrollador FullStack 
                                        </Typography>
                                        <Typography variant='body1' align='center' >
                                            <a href="https://certificates.soyhenry.com/new-cert?id=3af51b507287f18ecd58ebabbd94c9c5cb8adf8671032854b18e34051a448e28"
                                                target='blank' style={{ color: '#FFFFFF' }}>
                                                <b>Bootcamp SoyHenry</b> 
                                            </a> 
                                        </Typography>
                                        <Typography variant='body1' align='center' >
                                            2023 
                                        </Typography>
                                        <Typography variant='body2' align='center' gutterBottom marginBottom={[10]} >
                                            <b> +800 </b> horas de cursada
                                        </Typography>
                                        <Typography variant='h5' align='center'  style={{ color: '#92E3A9' }}>
                                            Ingeniería multimedia 
                                        </Typography>
                                        <Typography variant='body1' align='center' >
                                        <b> UNAD</b> 
                                            <a href="https://www.unad.edu.co/"
                                                target='blank' style={{ color: '#FFFFFF' }}>
                                                
                                            </a>  
                                        </Typography>
                                        <Typography variant='body1' align='center' >
                                            2022 - En curso actualmente
                                        </Typography>
                                        <Typography variant='body2' align='center' >
                                            <b>10 </b> semestres
                                        </Typography>
                                    </Paper>
                                )}
                                {value === "2" && (
                                    <Paper className={styles.paper}>
                                        <Typography variant='h5' align='center' style={{ color: '#92E3A9' }} marginTop={[10]} >
                                            Proyecto Final SoyHenry
                                        </Typography>
                                        <Typography variant='body1' align='center' >
                                            <b>E-commerce 'Las Encinas Boutique'</b> 
                                        </Typography>
                                        <Typography variant='body1' align='center' >
                                            Oct. 2023 - Nov. 2023 
                                        </Typography>
                                        {/* <Typography variant='body2' align='center' gutterBottom >
                                            <b> +800 </b> horas de cursada
                                        </Typography> */}
                                    </Paper>
                                )}
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button className={styles.skills} onClick={()=>navigate('/skills')}>
                                <PsychologyIcon/>Habilidades
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </section>         
    );
}

export default About;