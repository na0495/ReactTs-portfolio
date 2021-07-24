import { Box, Card, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Skill from "../layout/Skill";

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
    },
    card: {
      borderRadius: 25
    },
    skill: {
      padding: 3,
      width: 'auto'
    }
}));


export default function TechStack() {
    const classes = useStyles();

    return (
        <>
        <Card className={classes.card}>
        <Typography variant="h4" className={classes.heading}>
          Tech Stack :
        </Typography>
        <Box className={classes.center}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Card className={classes.skill}>
              <Skill
                name='Front-end'
                detail='JavaScript, React, Typescript, Redux, Redux thunk, Angular'
                icon='/language/react.png'
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>
        </Grid>
        </Box>
      </Card>
            <Grid container>
              {/* <Grid item xs={12}>
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/python.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/js.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/sql.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/java.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/c++.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/html.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/css.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/php.png" />
              </Grid> */}
              {/* <Grid item xs={12}>
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/django.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/react.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/redux.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/postgresql.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/git.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/github.jpg" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/npm.png" />
                <motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/laravel.png" />
              </Grid> */}
            </Grid>
        </>
    )
}