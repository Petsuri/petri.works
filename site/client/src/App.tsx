import React from "react";
import Routing from "./Routing";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

function App() {
    const responsiveFontSizesTheme = responsiveFontSizes(createMuiTheme(), { factor: 3 });
    
  return (
  <ThemeProvider theme={responsiveFontSizesTheme}>
    <Routing />      
  </ThemeProvider>
  );
}

export default App;
