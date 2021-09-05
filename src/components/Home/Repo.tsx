import { Card, Container } from '@material-ui/core';
import GithubRepoDisplay from '../repo/GetRepoData';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    card: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
      padding: theme.spacing(3),
    },
    image: {
      margin: theme.spacing(1),
      padding: theme.spacing(5),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      blockSize: "50%",
  
    }
  }));

export default function Repo() {
    const classes = useStyle();

    return (
        <Container>
            <Card className={classes.card}>
                <GithubRepoDisplay
                    numOfrepos={10}
                    userName='na0495'
                    showStars={true}
                    showLanguage={true}
                />
            </Card>
        </Container>
    );
}