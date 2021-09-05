import GitHubCalendar from "react-github-calendar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Container, Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    calander : {
      display: "flex",
      justifyContent: "center",
      paddingBottom: theme.spacing(5),
      padding: theme.spacing(3),
    },
    details: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(2),
    },
    heading: {
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: theme.spacing(5),
    },
    card: {
        borderRadius: 25
    },

}));

function GitHub() {
    const classes = useStyle();
  return (
    <Container>
      <Card className={classes.card}>
        <Typography variant="h4" className={classes.heading}>
          GitHub contributation Calander
        </Typography>
        <Box className={classes.calander}>
            <GitHubCalendar
            username="na0495"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            />
        </Box>
        <Box className={classes.details}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box className={classes.details}>
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=na0495&" alt="na0495" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.details}>
                <img src="https://github-readme-stats.vercel.app/api?username=na0495&count_private=true&theme=react" alt="na0495" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}

export default GitHub;
