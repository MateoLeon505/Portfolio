import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Grid, Typography } from "@mui/material"
import styles from './Banner.module.css';
import coding from '../../assets/img/Code typing-bro.svg';


const Banner = () => {

    return (
        //<div className={styles.bannerContainer}>
            <section className={styles.bannerContainer} id='home'>
                <Grid
                container
                direction='row'
                className={styles.gridContainer}>
                    <Grid item xs={4} md='' xl=''>
                        <Typography variant='h2' align='center' gutterBottom > Bienvenido a mi portfolio 👋 </Typography>
                        <Typography variant='body1' align='center' ><b> Mi nombre es Mateo León </b></Typography>
                        <Typography variant='h6' align='center'>Soy:</Typography>
                        <Typography variant='body1' align='center'>Fullstack / Frontend Developer</Typography>
                        <Typography variant='body1' align='center'>Estudiante de Ingeniería Multimedia</Typography>
                        <Typography variant='body1' align='center'>
                        {/* <button className={styles.connect} onClick={()=>alert('connect') }>
                                    <span>Let´s connect <ArrowRightCircle size={15}/></span>
                        </button> */}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={styles.imageContainer}>
                            <img src={coding} alt="HeaderImage" /> 
                        </div>               
                    </Grid>
                    
                </Grid>
            </section>
        //</div>
    );
}

export default Banner;