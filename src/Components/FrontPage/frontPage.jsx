import { Grid, Typography } from "@mui/material"
import styles from './frontPage.module.css'

const FrontPage = () => {

    return  (
        <Grid
        container
        direction='row'
        className={styles.gridContainer}>
            <Grid item xs={4}>
                <Typography variant='h2' align='center' gutterBottom > Hi everyone 👋 </Typography>
                <Typography variant='body1' align='center' ><b> Mi nombre es Mateo León </b></Typography>
                <Typography variant='h6' align='center'>Soy:</Typography>
                <Typography variant='body1' align='center'>Fullstack devoloper</Typography>
                <Typography variant='body1' align='center'>Frontend devoloper</Typography>
                <Typography variant='body1' align='center'>Estudiante de Ingeniería Multimedia</Typography>
            </Grid>
            <Grid item xs={6}>
                <img src="https://c0.wallpaperflare.com/preview/856/202/494/black-laptop.jpg" alt="desktop"  className={styles.image}/>
            </Grid>
        </Grid>
    );

}

export default FrontPage;