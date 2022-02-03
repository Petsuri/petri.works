// import React from 'react';
// import Routing from './Routing';
// import {
//   createTheme,
//   responsiveFontSizes,
//   ThemeProvider,
//   StyledEngineProvider,
// } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
//   typography: {
//     allVariants: {
//       color: 'white',
//     },
//   },
// });

// const responsiveFontSizesTheme = responsiveFontSizes(theme, { factor: 3 });

// function App() {
//   return (
//     <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={responsiveFontSizesTheme}>
//         <Routing />
//       </ThemeProvider>
//     </StyledEngineProvider>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import withAuthentication from './authentication/withAuthentication';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthentication(App);
