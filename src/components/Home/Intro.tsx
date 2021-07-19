// eslint-disable-next-line 
import { Typography, Container, Grid, Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/icon.css';

const useStyles = makeStyles({
    type: {
        color: 'orange'
    },
    card: {
        minWidth: 275,
        borderRadius: 15,
        border: '1px black',
        paddingTop: 2,
        paddingBottom: 2,
        marginBottom: 50
    },
    title: {
        fontSize: 14,
      },
    pos: {
        marginBottom: 12,
    },
  });

export default function Hero() {
  const classes = useStyles();

  return (
    <Container>
        <Grid container>
            <Grid xs={12} md={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h3" gutterBottom>
                        About me :
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                       <span className='icons'>&#129333;</span> My name is Mrabet saâd, a 23 years old, from Tangier morocco. <br/>
                       <span className='icons'>&#127891;</span>  I just completed my bachelor's degree in Computer Engineering this year. <br/>
                       <span className='icons'>&#127919;</span>  I enjoy being challenged and engaging with projects that require me to work outside my comfort
                       zone and knowledge set, as continuing to learn new languages and development techniques. <br/>
                       <span className='icons'>&#128200;</span>  I'm fluent in many programming languages, especially in JavaScript & Python.<br/>
                       <span className='icons'>&#128196;</span>  My field of Interest are building new  Web Technologies and Products and also in areas related
                       Mobile application and Natural Language Processing.<br/>
                       <span className='icons'>&#127756;</span>  whenever possible, i also apply my passion for developing products with multiple different frameworks
                       and technologies, like Django, React, Node.js ...
                    </Typography>
                  </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
            </Grid>
        </Grid>
    </Container>
  );
}

