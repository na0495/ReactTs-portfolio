import ThemeProvider from './theme/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Particles from './components/Animations/Particles';
import SwitchMode from './components/SwitchMode';
import Hero from './components/Home/Hero';
import Intro from './components/Home/Intro';
import Github from './components/Home/Github';
import Footer from './components/Home/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <SwitchMode/>
      <CssBaseline/>
      <Particles>
        <Hero/>
      </Particles>
      <Intro/>
      <Github/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;