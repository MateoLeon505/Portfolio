import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#92E3A9',
      },
      secondary: {
        main: '#D8D4CF',
      },
      tertiary: {
        main: '#121212',
      },
      cuaretiary: {
        main: '#1D7235',
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
  typography: {
    h1: {
      fontFamily: "Madimi One",
    },
    h2: {
      fontFamily: "Madimi One",
    },
    h3: {
      fontFamily: "Madimi One",
    },
    h4: {
      fontFamily: "Madimi One",
    },
    h5: {
      fontFamily: "Madimi One",
    },
    h6: {
      fontFamily: "Madimi One",
    },
    body1: {
      fontFamily: "Ubuntu"
    },
    body2: {
      fontFamily: "Ubuntu"
    },
    button: {
      fontFamily: "Open Sans",
    }
  },
  textField: {
    color: "white"
  }
});

export default theme;