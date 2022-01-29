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


function App() {
    const responsiveFontSizesTheme = responsiveFontSizes(createTheme(), { factor: 3 });
    
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveFontSizesTheme}>
        <Routing />      
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
