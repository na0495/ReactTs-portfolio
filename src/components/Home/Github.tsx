import GitHubCalendar from "react-github-calendar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Container, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    calander : {
        display: "flex",
        justifyContent: "center",
        paddingBottom: theme.spacing(5),
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
      </Card>
    </Container>
  );
}

export default GitHub;
