import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#92E3A9',
      },
      secondary: {
        main: '#FFFFFF',
      },
      tertiary: {
        main: '#121212',
      },
      success: {
        // main: '#FFA500',
        main: '#008080',
      },
      danger: {
        main: '#FF0000',
      },
      alert: {
        main: '#FFFF00',
      },
  },
});

export default theme;