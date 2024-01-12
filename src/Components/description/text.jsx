import { Grid, Typography } from '@mui/material';
import styles from  './text.module.css';
import reactImage from '../../assets/img/skills/react.svg';

const Text = () => {

    return (   
        <div className={styles.container}>
            <Grid
            container
            className={styles.gridContainer}
            spacing={2}>
                <Grid item width='80%'>
                    <Typography variant='body1' align='center' gutterBottom >
                        Soy estudiante de ingeniería multimedia y desarrollador web fullstack.
                    </Typography>
                </Grid>
                <Grid item width='80%'>
                    <Typography variant='body1' align='center' gutterBottom>
                        <b>Mi enfoque está en el desarrollo frontend, donde trabajo para crear soluciones web 
                        elegantes y funcionales que brinden una experiencia única a los usuarios.</b>
                    </Typography>
                </Grid>
                <Grid item width='80%'>
                    <Typography variant='body1' align='center'>
                        Mis objetivos profesionales son crecer como desarrollador web, explorar el emocionante 
                        mundo del desarrollo de aplicaciones móviles y contribuir a proyectos que generen un 
                        impacto positivo en la sociedad.
                    </Typography>
                </Grid>
            </Grid>
            <h2>Skills</h2>
            <table>
                <tr>
                    <td valign="top" width="33%">
                        <div align="center" className={styles.skills}>  
                            <a href="https://reactjs.org/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src={reactImage}
                                alt="React" height="80" />
                            </a>  
                            <a href="https://www.w3schools.com/css/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" 
                                alt="CSS3" height="50" />
                            </a>  
                            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" 
                                alt="HTML5" height="50" />
                            </a>  
                            <a href="https://www.javascript.com/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" 
                                alt="JavaScript" height="50" />
                            </a>  
                            <a href="https://redux.js.org/" target="_blank">
                                <img 
                                // style="margin: 10px"
                                src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="50" />
                            </a>  
                            <a href="https://nodejs.org/" 
                                target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" 
                                alt="Node.js" height="50" />
                            </a>  
                            <a href="https://expressjs.com/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" 
                                alt="Express.js" height="50" />
                            </a>  
                            <a href="https://github.com/" target="_blank">
                                <img 
                                // style="margin: 10px" 
                                src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" 
                                alt="Git" height="50" />
                            </a> 
                        </div>
                    </td>
                </tr>
            </table> 
{/* <a href="https://github.com/MateoLeon505" target="_blank">
<img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" style="margin-bottom: 5px;" />
</a>
<a href="https://stackoverflow.com/users/22949021/mateo-leon" target="_blank">
<img src="https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white" alt="stackoverflow" style="margin-bottom: 5px;" />
</a>
<a href="https://linkedin.com/in/mateo-león-097b57268/" target="_blank">
<img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" style="margin-bottom: 5px;" />
</a>   */}

        </div>         
    );
}

export default Text;