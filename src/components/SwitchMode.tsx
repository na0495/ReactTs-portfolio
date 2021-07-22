import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useChangeTheme } from '../theme/ThemeProvider';
import useTheme from '@material-ui/core/styles/useTheme';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  sticky: {
    position: 'sticky',
    top: '0',
    textAlign: 'right',
    zIndex: 3,
    paddingTop: 10,
    paddingRight: 10,
  }
});


const SwitchMode: React.FC = ()=>{
  const theme = useTheme();
  const changeTheme = useChangeTheme();
  const classes = useStyles();
  return (
    <Box className={classes.sticky}>
      <IconButton title="Toggle light/dark mode" onClick={()=>changeTheme()}>
        {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Box>
  )
}

export default SwitchMode;
