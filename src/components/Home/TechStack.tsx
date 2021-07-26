import { Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Skill from "../layout/Skill";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
  },
  heading: {
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: theme.spacing(5),
  },
  card: {
    marginTop: theme.spacing(5),
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
  },
  skill: {
    padding: 3,
    width: 'auto'
  },
  image: {
    width: 175,
    height: 175,
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  chip: {
    margin: 2,
    border: '2px solid'
  }
}));


export default function TechStack() {
    const classes = useStyles();
    const Techno = [
      {
        id: 1,
        name: 'Front-end',
        tech: ['ReactJs', 'Redux', 'Angular', 'Bootstrap', 'Material-UI', 'Chakra-UI'],
        img: '/stack/frontend.png'
      },
      {
        id: 2,
        name: 'Back-end',
        tech: ['Django', 'Laravel'],
        img: '/stack/backend.png'
      },
      {
        id: 3,
        name: 'Data base',
        tech: ['MySQL', 'PostgreSQL', 'SQLite'],
        img: '/stack/database.jpg'
      },
    ]

    return (
        <Container className={classes.container}>
        <Typography variant="h4" className={classes.heading}>
          Tech Stack :
        </Typography>
        <div className={classes.details}>
        {Techno.map((p, i) => (
          <Card key={i} className={classes.card}>
            <CardMedia
              className={classes.image}
              component="img"
              alt="Back-end"
              image={process.env.PUBLIC_URL + p.img}
              title="Back-end"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {p.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {p.tech.map((p, i) => {
                return (
                  <Chip key={i} className={classes.chip} label={p}/>
                );
              })}
              </Typography>
            </CardContent>
          </Card>
        ))}
        </div>
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
        </Container>
    )
}