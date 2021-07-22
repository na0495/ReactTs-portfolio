import siteConfig from '../../configs/site-config';
import { Box, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: theme.spacing(10),
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: 25
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
      <>
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
        <Typography variant="subtitle1" className={classes.copyright}>
            {siteConfig.copyright}
        </Typography>
      </>
    );
}