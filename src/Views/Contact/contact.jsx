import SocialMedia from './socialMedia';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FormControl } from '@mui/base/FormControl';
import { FormLabel } from '@mui/material';
import { Grid, Typography, Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './contact.module.css';

const Contact = () => {

  const [state, handleSubmit] = useForm("xgegaboy");

  const [ contactData, setContactData ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ alertOpen, setAlertOpen ] = useState(true);

  const updateData = (event) => {

    const property = event.target.name;
    const value = event.target.value;

    setContactData({...contactData, [property]: value})
    console.log(contactData);
  }

  const submitData = (event) => {

    event.preventDefault();

    handleSubmit(event).then(() => {
      if (state.succeeded) {
        setContactData({
          name: '',
          email: '',
          message: ''
        })
      }
    })

  }

  return (
    <section className={styles.mainContainer}>
      { state.succeeded && 
        <Box className={styles.alertBox}>
          <Collapse in={alertOpen}>
            <Alert severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertOpen(false);
                  }} 
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
            <AlertTitle>¡Gracias por contactarme!</AlertTitle>
            Pronto te daré una respuesta...
          </Alert>
          </Collapse>
        </Box>
      }
      <Grid
        container
        direction='row'
        className={styles.gridContainer}>
        <Grid item xs={12} sm={8} md={6} lg={6}  spacing={2}>
          <form className={styles.formContainer} onSubmit={submitData}>
            <div className={styles.organizer}>
              <div className={styles.formRow}>
                <FormLabel className={styles.formTitle}> <span className={styles.formLabelHere}>¡Contáctame</span> aquí!</FormLabel>   
              </div>
              <div className={styles.formRow}>
                <TextField
                  id="1" color="primary" focused label="Nombre" type='text' variant="outlined"
                  name="name" value={contactData.name} onChange={updateData}
                  className={styles.textFieldHalf}
                  InputProps={{
                    style: { color: '#FFFFFF' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdAccountCircle style={{color: '#FFFFFF'}} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: '#92E3A9' },
                  }}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <TextField
                  id="2" color="primary" focused label="Correo Electrónico" type="email" variant="outlined"
                  name="email" value={contactData.email} onChange={updateData}
                  className={styles.textFieldHalf}
                  InputProps={{
                    style: { color: '#FFFFFF' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdEmail style={{color: '#FFFFFF'}} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: '#92E3A9' },
                  }}
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className={styles.formRow}>
                <TextField
                  id="2" color="primary" focused label="Mensaje" type="text" variant="outlined" 
                  placeholder='Escribe un mensaje...' multiline rows={2}
                  name="message" value={contactData.message} onChange={updateData}
                  style={{ height: '100px' }}
                  className={styles.textFieldFull}
                  InputProps={{
                    style: { color: '#FFFFFF', height: '200' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaMessage style={{color: '#FFFFFF'}} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: '#92E3A9' },
                  }}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className={styles.formRow}>
                <Button variant="contained" className={styles.buttonSubmit} type='submit'
                  style={{ background: '#ECEFF1', color: '#121212' }}>
                  Envíar
                </Button>  
              </div>
            </div>
          </form>           
        </Grid>   
        <Grid item xs={12} sm={8} md={6} lg={6} className={styles.socialMediaContact}>
          <div className={styles.gridElement}>
            <Typography variant='h4' align='center' gutterBottom >O encuentrame 
              <span className={styles.letterMedia}> en:</span>
            </Typography>
          </div>
          <div className={styles.gridElement}>
            <SocialMedia/>
          </div>
          <div className={styles.gridElement}>            
            {/* <Typography variant='body1' align='center'>
              <Button variant="contained" 
                  style={{ background: '#ECEFF1', color: '#121212' }}>
                  Sobre mí
              </Button>  
            </Typography>      */}
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;