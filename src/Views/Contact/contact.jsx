import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FormControl } from '@mui/base/FormControl';
import { FormLabel } from '@mui/material';
import { Grid, Typography, Button } from "@mui/material"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { MdEmail, MdAccountCircle } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import styles from './contact.module.css';

const Contact = () => {

  const [state, handleSubmit] = useForm("xgegaboy");

  const [ contactData, setContactData ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const updateData = (event) => {

    const property = event.target.name;
    const value = event.target.value;

    setContactData({...contactData, [property]: value})
    console.log(contactData);
  }

  if (state.succeeded) {
    return <p>¡Gracias por contactarme!</p>;
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
      <Grid
        container
        direction='row'
        className={styles.gridContainer}>
        <Grid item xs={12} md={6} lg={6} className={styles.text}>
            <Typography variant='h2' align='center' gutterBottom >Bienvenido a mi portfolio  
            </Typography>
            <Typography variant='h4' align='center'> Soy
                <span style={{ color: '#92E3A9' }}> Mateo León</span>
            </Typography>
                    
            <Typography variant='body1' align='center'>Desarrollador 
                <span style={{ color: '#92E3A9' }}> Fullstack / Frontend</span> &
            </Typography>
            <Typography variant='body1' align='center' gutterBottom>Estudiante de 
                <span style={{ color: '#92E3A9' }}> Ingeniería Multimedia</span> 
            </Typography>   
            <Typography variant='body1' align='center'>
            <Button variant="contained" 
                style={{ background: '#ECEFF1', color: '#121212' }}>
                Sobre mí
            </Button>  
            </Typography>     
        </Grid>
        <Grid item xs={12} md={6} lg={6} spacing={2}>
          <form className={styles.formContainer} onSubmit={submitData}>
            <div className={styles.organizer}>
              <div className={styles.formRow}>
                <FormLabel className={styles.formTitle}>Contacto</FormLabel>   
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
      </Grid>
    </section>
  );
};

export default Contact;