import React from 'react';
import Routing from './Routing';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#282c34',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
});

const responsiveFontSizesTheme = responsiveFontSizes(theme, { factor: 3 });

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveFontSizesTheme}>
        <Routing />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
