import { createTheme, PaletteColorOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    [key: string]: string;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#231F20',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
