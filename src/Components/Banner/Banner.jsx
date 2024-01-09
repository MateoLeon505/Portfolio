import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Grid, Typography } from "@mui/material"
import styles from './Banner.module.css';
import header from '../../assets/img/header-img.svg';


const Banner = () => {

    return (
        //<div className={styles.bannerContainer}>
            <section className={styles.Banner} id='home'>
                <Grid
                container
                direction='row'
                className={styles.gridContainer}>
                    <Grid item xs={4} md='' xl=''>
                        <Typography variant='h2' align='center' gutterBottom > Bienvenido a mi portfolio 👋 </Typography>
                        <Typography variant='body1' align='center' ><b> Mi nombre es Mateo León </b></Typography>
                        <Typography variant='h6' align='center'>Soy:</Typography>
                        <Typography variant='body1' align='center'>Fullstack devoloper</Typography>
                        <Typography variant='body1' align='center'>Frontend devoloper</Typography>
                        <Typography variant='body1' align='center'>Estudiante de Ingeniería Multimedia</Typography>
                        <Typography variant='body1' align='center'>
                        <button className={styles.connect} onClick={()=>alert('connect') }>
                                    <span>Let´s connect <ArrowRightCircle size={25}/></span>
                        </button>
                        </Typography>

                    </Grid>
                    <Grid item xs={6}>
                        <img src={header} alt="HeaderImage" />                
                    </Grid>
                </Grid>
            </section>
        //</div>
    );
}

export default Banner;