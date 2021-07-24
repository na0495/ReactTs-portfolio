// eslint-disable-next-line 
import { Box, Typography, IconButton} from '@material-ui/core';
import siteConfig from '../../configs/site-config';
// eslint-disable-next-line 
import { makeStyles } from '@material-ui/core/styles'
import Type from '../Animations/Type';
import '../styles/icon.css';

const useStyles = makeStyles((theme) => ({
    type: {
        color: 'orange',
        fontWeight: 'bold'
    },
    text: {
      fontWeight: 'bold'
    },
    iconBox: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      marginTop: theme.spacing(10),
  },
  }));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box sx={{ height: window.innerHeight}}>
      <Box sx={{ py: 10, px: 3, textAlign: 'center'}}>
        <Typography variant="h2" gutterBottom className={classes.text}>
          Hello There <span className="waving-hand">&#128075;</span>
        </Typography>
        <Typography variant="h4" gutterBottom className={classes.text}>
          My name is Mrabet Saâd
        </Typography>
        <Typography variant="h4" className={classes.type}>
          <Type/>   
        </Typography>
        <Box className={classes.iconBox}>
            {siteConfig.author.accounts.map(sc => (
                <IconButton
                    key={sc.label}
                    href={sc.url}
                    aria-label={sc.label}
                    // color={sc.type}
                    > {sc.icon}
                </IconButton>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

