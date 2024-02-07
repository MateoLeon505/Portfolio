import { FormControl } from '@mui/base/FormControl';
import { FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { MdEmail, MdAccountCircle } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <FormControl className={styles.formContainer}>
        <FormLabel>Contacto</FormLabel>        
        <TextField
          id="1" color="primary" focused
          label="Nombre"
          variant="outlined"
          className={styles.textField}
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
        <TextField
          id="2" color="primary" focused
          label="Correo Electrónico"
          type="email"
          variant="outlined"
          className={styles.textField}
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
        <TextField
          id="2" color="primary" focused
          label="Mensaje"
          type="email"
          variant="outlined"
          multiline maxRows={4}
          className={styles.textField}
          InputProps={{
            style: { color: '#FFFFFF' },
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
      </FormControl>
    </div>
  );
};

export default Contact;