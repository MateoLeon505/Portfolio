import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Text = () => {

    return (
        <div>
            <Grid
             container
             direction="row"
             justifyContent="center"
             alignItems="center">
                <Typography variant='body1'>
                    Soy estudiante de ingeniería multimedia y desarrollador web fullstack. 
                    Mi enfoque principal se encuentra en el desarrollo frontend, donde trabajo arduamente 
                    para fusionar la creatividad visual con la funcionalidad impecable.
                </Typography>
                {/* <div>
                <img 
                src="https://as2.ftcdn.net/v2/jpg/04/24/43/47/1000_F_424434784_C1bk1xCJoL7x3kgjLeJVEeWAgKJ4bq8e.jpg" 
                alt="img" />
                </div> */}
            </Grid>
        </div>
    );
}

export default Text;