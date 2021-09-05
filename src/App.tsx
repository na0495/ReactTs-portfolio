import { useMemo } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme } from '@material-ui/core/styles';
import Particles from './components/Animations/Particles';
import SwitchMode from './components/SwitchMode';
import Hero from './components/Home/Hero';
import Intro from './components/Home/Intro';
import Github from './components/Home/Github';
import Footer from './components/Home/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Path from './components/Home/Path';
import TechStack from './components/Home/TechStack';
// import Repo from './components/Home/Repo';
// import Tech from './components/Home/Tech';
// import Project from './components/Home/Project';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  return (
    <ThemeProvider theme={theme}>
      <SwitchMode/>
      <CssBaseline/>
      <Particles>
        <Hero/>
        <Intro/>
        <Path/>
        <Github/>
        {/* <Repo/> */}
        <TechStack/>
        <Footer/>
      </Particles>
    </ThemeProvider>
  );
}

export default App;