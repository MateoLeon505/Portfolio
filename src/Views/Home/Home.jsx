//import FrontPage from "../../Components/FrontPage/frontPage";
import { FrontPage, Text } from "../../Components/index"
//import Text from "../../Components/description/text";
import { Grid } from '@mui/material';

const Home = () => {

    return(
        <div>
            {/* <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop='4%'
            marginBottom='4%'>
                <Grid item xs='6'></Grid>
                <Grid item xs='6'>Hola</Grid>
            </Grid> */}
            <FrontPage/>
            <Text/>
        </div>
    );
}

export default Home;