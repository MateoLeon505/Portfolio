import { Grid, Typography } from '@mui/material';
import styles from  './text.module.css';

const Text = () => {

    return (   
        <div className={styles.container}>
            <Grid
            container
            className={styles.gridContainer}
            spacing={2}>
                <Grid item width='65%'>
                    <Typography variant='body1' align='center' gutterBottom >
                        Soy estudiante de ingeniería multimedia y desarrollador web fullstack.
                    </Typography>
                </Grid>
                <Grid item width='65%'>
                    <Typography variant='body1' align='center' gutterBottom>
                        <b>Mi enfoque está en el desarrollo frontend, donde trabajo para crear soluciones web 
                        elegantes y funcionales que brinden una experiencia única a los usuarios.</b>
                    </Typography>
                </Grid>
                <Grid item width='65%'>
                    <Typography variant='body1' align='center'>
                        Mis objetivos profesionales son crecer como desarrollador web, explorar el emocionante 
                        mundo del desarrollo de aplicaciones móviles y contribuir a proyectos que generen un 
                        impacto positivo en la sociedad.
                    </Typography>
                </Grid>
            </Grid>
        </div>         
    );
}

export default Text;