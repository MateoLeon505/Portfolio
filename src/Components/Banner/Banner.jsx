import { useState, useEffect } from 'react';
import { Grid, Typography } from "@mui/material"
import styles from './Banner.module.css';
import coding from '../../assets/img/Code typing-bro.svg';

const Banner = () => {

    return (
        <section className={styles.bannerContainer} id='home'>
            <Grid
                container
                direction={{ xs: 'column', lg: 'row' }} 
                className={styles.gridContainer}>
                <Grid item xs={12} lg={6}>
                    <Typography variant='h2' align='center' gutterBottom > Bienvenido a mi portfolio 👋 </Typography>
                    <Typography variant='body1' align='center' ><b> Mi nombre es Mateo León, soy: </b></Typography>
                    <Typography variant='body1' align='center'>Fullstack / Frontend Developer</Typography>
                    <Typography variant='body1' align='center'>&</Typography>
                    <Typography variant='body1' align='center'>Estudiante de Ingeniería Multimedia</Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={styles.imageContainer}>
                        <img src={coding} alt="HeaderImage" /> 
                    </div>               
                </Grid>   
            </Grid>
        </section>
    );
}

export default Banner;