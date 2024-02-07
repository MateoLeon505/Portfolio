import { FormControl } from '@mui/base/FormControl';
import { FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import InputAdornment from '@mui/material/InputAdornment';

import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <FormControl className={styles.formContainer}>
        <FormLabel>Contacto</FormLabel>        

        <TextField
          id="outlined-basic" color="primary" 
          label="Nombre"
          variant="outlined"

          InputProps={{
            style: { color: '#FFFFFF' },
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle style={{color: '#FFFFFF'}} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: '#FFFFFF' },
          }}
        />

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} style={{color: '#FFFFFF'}} />
        <TextField
          id="1" color="primary"  focused 
          label="Nombre"
          variant="outlined"

          InputProps={{
            style: { color: '#FFFFFF' },
          }}
          InputLabelProps={{
            style: { color: '#92E3A9' },
          }}
        />
      </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} style={{color: '#FFFFFF'}}/>
            <TextField id="input-with-sx" label="Correo Electrónico" variant="standard" type="email" className={styles.textField} />
          </Box>

          <TextField label="Mensaje" variant="outlined" multiline maxRows={4} className={styles.textField}/>
      </FormControl>
    </div>
  );
};

export default Contact;