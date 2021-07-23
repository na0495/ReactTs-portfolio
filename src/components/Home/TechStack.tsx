import { Box, Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    heading: {
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: theme.spacing(5),
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));


export default function TechStack() {
    const classes = useStyles();

    return (
        <>
        <Typography variant="h4" className={classes.heading}>My Tech Stack :</Typography>
        <Box pt={10} pb={10} className={classes.center}>
            <Grid container>
              <Grid item xs={12}>
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/python.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/js.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/sql.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/java.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/c++.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/html.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/css.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/php.png" />
              </Grid>
              <Grid item xs={12}>
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/django.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/react.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/redux.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/postgresql.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/git.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/github.jpg" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/npm.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/laravel.png" />
              </Grid>
            </Grid>
        </Box>
        </>
    )
}