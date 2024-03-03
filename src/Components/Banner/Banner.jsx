import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Banner.module.css';
import { MdAccountCircle } from "react-icons/md";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import coding from '../../assets/img/Code typing-bro.svg';

const Banner = () => {

    const navigate = useNavigate();

    return (
        <section className={styles.bannerContainer} id='home'>
            <Grid
                container
                direction='row'
                className={styles.gridContainer}>
                <Grid item xs={12} md={6} lg={6} className={styles.text}>
                    <Typography variant='h2' align='center' gutterBottom >Bienvenido a mi portfolio  
                        <WavingHandIcon style={{ color: '#92E3A9' }} fontSize="large" />
                    </Typography>
                    <Typography variant='h4' align='center'> Soy
                        <span style={{ color: '#92E3A9' }}> Mateo León</span>
                    </Typography>
                    {/* <CircularProgress disableShrink style={{ color: '#1D7235', fontSize: '50' }} /> */}
                    <Typography variant='body1' align='center'>Desarrollador 
                        <span style={{ color: '#92E3A9' }}> Fullstack / Frontend</span> &
                    </Typography>
                    <Typography variant='body1' align='center' gutterBottom>Estudiante de 
                        <span style={{ color: '#92E3A9' }}> Ingeniería Multimedia</span> 
                    </Typography>   
                    <Typography variant='body1' align='center'>
                    <Button variant="contained" onClick={()=>navigate('/about')}
                        style={{ background: '#ECEFF1', color: '#121212' }}>
                        <MdAccountCircle fontSize="large"/>
                        Sobre mí
                    </Button>  
                    </Typography>     
                    {/* <a href="#h" style={{  color: '#66D9A1' }}>Holaaaaaaaaaaaaaaaa</a>
                    <p style={{  color: '#99AAB5' }}>Ejemplo opárradfoo</p> */}
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <div className={styles.imageContainer}>
                        <img src={coding} alt="HeaderImage" className={styles.image}/> 
                    </div>               
                </Grid>   
            </Grid>
        </section>
    );
}

export default Banner;