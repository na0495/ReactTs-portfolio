import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { Icon } from '@iconify/react';
import { Box, Card, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import certificateOutline from '@iconify-icons/mdi/certificate-outline';
import bookEducationOutline from '@iconify-icons/mdi/book-education-outline';
import devicesIcon from '@iconify-icons/mdi/devices';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: 2,
        border: '2px solid'
    },
    box: {
      marin: 2,
    },
    heading: {
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: theme.spacing(5),
    },
    details : {
      padding: theme.spacing(2),
    },
    card: {
      // borderRadius: 25,
      paddingTop: 15,
      paddingBottom: 15,
      marginBottom: 50,
    },
}));

export default function Path() {
    const classes = useStyles();
    const mainBachelor = ['C++ OOP programming',' Database Administration',' Relational Databases Management Systems (MySQL)', 'Networking (OSI network model)', 'Operating Systems (Linux) & bash scripitng', 'Web Development (HTML5/CSS3/JavaScript/PHP)', 'Client-Server Architecture', 'UML', 'English/French (TEC)']
    const mainDeust = ['Maths (analysis & algebre)', 'computer science','data structures & algorithm', 'C programming language', 'Database & SQL', 'physique & chemistry']
    const mainTecheno = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'Python  3rd party libraires', 'JavaScript', 'React', 'Redux', 'Scrum', 'SQL', 'PostgreSQL', 'Git', 'Github', 'Contabo Server']
    const mainStack = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'Python  3rd party libraires', 'Angular', 'TypeScript', 'Unit testing', 'Test Driven Devlopment', 'SQLite', 'PostegreSQL', 'POSTMAN', 'git', 'GitHub']
    var mainBach = mainBachelor.map((p, i) => {
        return (
          <Chip key={i} className={classes.chip} label={p}/>
        );
      });
  
      var mainDeu = mainDeust.map((p, i) => {
        return (
          <Chip key={i} className={classes.chip} label={p}/>
        );
      });
  
      var mainTec = mainTecheno.map((p, i) => {
        return (
          <Chip key={i} className={classes.chip} label={p}/>
        );
      });

      var mainTecStack = mainStack.map((p, i) => {
        return (
          <Chip key={i} className={classes.chip} label={p}/>
        );
      });
    return (
        <Box className={classes.card}>
            <Typography variant="h4" className={classes.heading}>
                Experience & studys
            </Typography>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            // contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2020 - Jun 2021"
            iconStyle={{ background: '#CAC0A5', border: '2px solid'}}
            icon={<Icon icon={bookEducationOutline} />}
          >
            <Card className={classes.details}>

              <h3 style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>
                Full stack developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">at Atkana IT consulting </h4>
              <p>Development of new application from scratch & scaling them along with Test Driven development 
              methodology, development of a responsive Front-end with UX practice & Backend interface.
              </p>
              <p>
              The technologies i'm working with : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTecStack}
              </div>
              </p>
              </Card>

          </VerticalTimelineElement>
        <VerticalTimelineElement
            className={"vertical-timeline-element--work"} 
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Mar 2021 - present"
            iconStyle={{ background: '#CAC0A5', border: '2px solid'}}
            icon={<Icon icon={devicesIcon} />}
          >
            <Card className={classes.details}>
              <h3 style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>
                Full stack developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">at PULL4YOU SERVICE S.A.R.L</h4>
              <p>Development of a web application from scratch & scaling it along with Scrum Agile methodology, 
                designing UML modeling / BPM, Structing Backend & Frontend, unit testing..</p>
              <p>
                The technologies i'm working with : 
              <div className={classes.box}>
                {mainTec}
              </div>
              </p>
            </Card>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2020 - Jun 2021"
            iconStyle={{ background: '#CAC0A5', border: '2px solid'}}
            icon={<Icon icon={bookEducationOutline} />}
          >
            <Card className={classes.details}>
              <h3 style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>
                Bachelor in computer engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">At Faculty of science and techenologie of Tangier</h4>
              <p>
                Bachelor main programme : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainBach}
              </div>
              </p>
            </Card>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2017 - Jun 2020"
            iconStyle={{ background: '#CAC0A5', border: '2px solid'}}
            icon={<Icon icon={certificateOutline} />}
          >
            <Card className={classes.details}>
              <h3 className="vertical-timeline-element-title" style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>DEUST MIP</h3>
              <h4 className="vertical-timeline-element-subtitle">Faculty of science and techenologie of Tangier</h4>
              <p>
                The main programme : 
                <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                  {mainDeu}
                </div>
              </p>
            </Card>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </Box>
    );
}