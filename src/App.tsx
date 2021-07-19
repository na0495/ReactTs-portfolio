import React from 'react';
import ThemeProvider from './theme/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import SwitchMode from './components/SwitchMode';
import Hero from './components/Home/Hero';
import Intro from './components/Home/Intro';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <SwitchMode/>
      <Hero/>
      <Intro/>
    </ThemeProvider>
  );
}

export default App;