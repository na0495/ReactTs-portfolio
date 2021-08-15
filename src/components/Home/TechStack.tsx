// import { useState, useEffect } from "react";
import { Box, Card, Chip, Container, Typography } from "@material-ui/core";
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";


function Stats(props: LinearProgressProps & { value: number }) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%"  mr={1} className={classes.line}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    maxWidth: 1000
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
    padding: theme.spacing(5),
  },
  line: {
    fontWeight: "bold",
    fontSize: "1.5em"
  },
  chip: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
  //   backgroundColor: theme.palette.secondary.main,
  //   color: theme.palette.secondary.contrastText,
  //   fontSize: "1.5em",
  //   fontWeight: "bold",
  //   borderRadius: theme.shape.borderRadius
  }
}));


export default function TechStack() {
    const classes = useStyles();
    // const [progress, setProgress] = useState(0);
  
    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     setProgress((prevProgress) => (prevProgress >= 90 ? 10 : prevProgress + 10));
    //   }, 500);
    //   return () => {
    //     clearInterval(timer);
    //   };
    // }, []);
    const Techno = [
      {
        id: 1,
        title: 'Front-end',
        lang: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        tech: [
          {
            id: 1,
            name: 'ReactJs',
            value: 90
          },
          {
            id: 2,
            name: 'Redux/Redux Toolkit',
            value: 90
          },
          {
            id: 3,
            name: 'Angular',
            value: 75
          },
          {
            id: 4,
            name: 'Material-UI / Chakra-UI',
            value: 75
          },
          {
            id: 5,
            name: 'Bootstrap',
            value: 60
          },
        ],
      },
      {
        id: 2,
        title: 'Back-end',
        lang: ['Python', 'PHP'],
        tech: [
          {
            id: 1,
            name: 'Django',
            value: 95
          },
          {
            id: 2,
            name: 'Laravel',
            value: 80
          },
        ],
      },
      {
        id: 3,
        title: 'Data base',
        lang: ['SQL'],
        tech: [
          {
            id: 1,
            name: 'SQLite',
            value: 85
          },
          {
            id: 2,
            name: 'PostgreSQL',
            value: 80
          },
          {
            id: 3,
            name: 'MySQL',
            value: 60
          },
        ],
      },
    ]

    return (
        <Container className={classes.container}>
          <Typography variant="h4" className={classes.heading}>
            Tech Stack :
          </Typography>

          {Techno.map((p, i) => (
            <Card key={i} className={classes.card}>
              <Typography gutterBottom variant="h5" component="h2">
                {p.title}
              </Typography>
              <Typography gutterBottom variant="body1" component="h2">
              I'm familiar with working with :
              </Typography>
                {p.lang.map((c, i) => (
                <Chip key={i} className={classes.chip} label={c}/>
                ))}
                {p.tech.map((t, j) => (
                  <><Typography variant="body2" color="textSecondary" component="p" key={j}>
                    {t.name}
                  </Typography><Stats value={t.value} key={j} /></>
                ))}
            </Card>
          ))}
        </Container>
    )
}