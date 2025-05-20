import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Crea una instancia de tema.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6', // Un color primario de ejemplo
    },
    secondary: {
      main: '#19857b', // Un color secundario de ejemplo
    },
    error: {
      main: red.A400,
    },
    // Puedes añadir más personalizaciones aquí: background, text, etc.
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    // Puedes personalizar variantes de tipografía: h1, h2, body1, etc.
  },
  // Puedes personalizar otros aspectos como spacing, breakpoints, shape, etc.
});

export default theme;