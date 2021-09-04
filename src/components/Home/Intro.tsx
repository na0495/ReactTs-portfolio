// eslint-disable-next-line 
import { Typography, Avatar , Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/icon.css';

const useStyles = makeStyles((theme) => ({
    type: {
        color: 'orange'
    },
    card: {
        minWidth: 275,
        borderRadius: 15,
        border: '1px black',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 50
    },
    title: {
        fontSize: 14,
      },
    pos: {
        marginBottom: 12,
    },
    heading : {
      fontWeight: 'bold',
    },
    image : {
      width: theme.spacing(45),
      height: theme.spacing(45),
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle',
    }
  }));

export default function Hero() {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Avatar alt="Mrabet Saad" src={process.env.PUBLIC_URL + 'images/me.png'} className={classes.image} />
            </Grid>
            <Grid xs={12} md={9}>
              <Typography variant="h3" gutterBottom className={classes.heading}>
                  Let me Introduce myself :
              </Typography>
              <Typography variant="h6" gutterBottom>
                 <span className='icons'>&#129333;</span>  My name is Mrabet saâd, a 23 years old, from Tangier morocco. <br/>
                 <span className='icons'>&#127891;</span>  I just completed my bachelor's degree in Computer Engineering this year (2021). <br/>
                 <span className='icons'>&#127919;</span>  I enjoy being challenged and engaging with projects that require me to work outside my comfort
                 zone and knowledge set, as continuing to learn new languages and development techniques. <br/>
                 <span className='icons'>&#128200;</span>  I'm fluent in many programming languages, especially in JavaScript/TypeScript & Python any many others ...<br/>
                 <span className='icons'>&#128196;</span>  My field of Interest are building new Web Technologies and Products and also in areas related
                 Mobile application and Natural Language Processing.<br/>
                 <span className='icons'>&#127756;</span>  whenever possible, i also apply my passion for developing products with multiple different frameworks
                 and technologies, like Django, React, Angular, Node.js ...
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
}

