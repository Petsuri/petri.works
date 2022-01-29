import React from "react";
import Routing from "./Routing";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
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
      color: 'white'
    }
  }
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
