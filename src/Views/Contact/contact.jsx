import { FormControl } from '@mui/base/FormControl';
import { FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <FormControl className={styles.formContainer}>
        <FormLabel>Contacto</FormLabel>
          <TextField label="Nombre"  focused color="primary" inputProps={{ style: { color: '#FFFFFF' } }} 
            className={styles.textField}/>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Correo Electrónico" variant="standard" type="email" className={styles.textField} />
          </Box>
          <TextField label="Mensaje" variant="outlined" multiline maxRows={4} className={styles.textField}/>
      </FormControl>
    </div>
  );
};

export default Contact;