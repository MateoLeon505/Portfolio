import { Grid, Typography, makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         backgroundColor: '#000000',
//     }
// }))

const Text = () => {

    
  //const classes = useStyles();

    return (            
        <Grid
        container
        //className={classes.container}
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={3}
        spacing={2}
        marginTop='4%'
        marginBottom='4%'>
            <Grid item width='60%'>
                <Typography variant='body1' align='center' gutterBottom >
                    Soy estudiante de ingeniería multimedia y desarrollador web fullstack.
                </Typography>
            </Grid>
            <Grid item width='60%'>
                <Typography variant='body1' align='center' gutterBottom>
                    <b>Mi enfoque está en el desarrollo frontend, donde trabajo para crear soluciones web 
                    elegantes y funcionales que brinden una experiencia única a los usuarios.</b>
                </Typography>
            </Grid>
            <Grid item width='60%'>
                <Typography variant='body1' align='center'>
                    Mis objetivos profesionales son crecer como desarrollador web, explorar el emocionante 
                    mundo del desarrollo de aplicaciones móviles y contribuir a proyectos que generen un 
                    impacto positivo en la sociedad.
                </Typography>
            </Grid>
            
        </Grid>
        
    );
}

export default Text;