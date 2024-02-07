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
        main: '#C4E2FF',
      },
      success: {
        main: '#FFA500',
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