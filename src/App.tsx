import React from 'react';
import ThemeProvider from './theme/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Home from './components/SwitchMode';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;