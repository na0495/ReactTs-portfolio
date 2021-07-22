// eslint-disable-next-line 
import { Box, Typography, IconButton} from '@material-ui/core';
// eslint-disable-next-line 
import { makeStyles } from '@material-ui/core/styles'
import Type from '../Animations/Type';
import '../styles/icon.css';

const useStyles = makeStyles({
    type: {
        color: 'orange'
    },
  });

export default function Hero() {
  const classes = useStyles();

  return (
    <Box sx={{ height: window.innerHeight - 140}}>
      <Box sx={{ py: 10, px: 3, textAlign: 'center'}} >
        <Typography variant="h2" gutterBottom>
          Hello There <span className="waving-hand">&#128075;</span>
        </Typography>
        <Typography variant="h4" className={classes.type}>
          <Type/>   
        </Typography>
      </Box>
    </Box>
  );
}

