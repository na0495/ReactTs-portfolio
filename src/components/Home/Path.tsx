import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { Icon } from '@iconify/react';
import { Box, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import certificateOutline from '@iconify-icons/mdi/certificate-outline';
import bookEducationOutline from '@iconify-icons/mdi/book-education-outline';
import devicesIcon from '@iconify-icons/mdi/devices';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: 1,
    },
    heading: {
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: theme.spacing(5),
    },
}));

export default function Path() {
    const classes = useStyles();
    const mainBachelor = ['C++ OOP programming',' Database Administration',' Relational Databases Management Systems (MySQL)', 'Networking (OSI network model)', 'Operating Systems (Linux) & bash scripitng', 'Web Development (HTML5/CSS3/JavaScript/PHP)', 'Client-Server Architecture', 'UML', 'English/French (TEC)']
    const mainDeust = ['Maths (analysis & algebre)', 'computer science','data structures & algorithm', 'C programming language', 'Database & SQL', 'physique & chemistry']
    const mainTecheno = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'JavaScript', 'React', 'Redux', 'Scrum', 'SQL', 'PostgreSQL', 'Git', 'Github', 'Contabo Server']
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
    return (
        <Box pb={15} pt={15}>
            <Typography variant="h4" className={classes.heading}>
                Experience & studys
            </Typography>
        <VerticalTimeline>
        <VerticalTimelineElement
            className={"vertical-timeline-element--work"} 
            contentStyle={{ background: '#ffa733', borderTop: '5px solid', borderLeft: '5px solid', borderBottom: '5px solid'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Mar 2021 - present"
            iconStyle={{ background: '#CAC0A5', border: '2px solid'}}
            icon={<Icon icon={devicesIcon} />}
          >
              <h3 style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>
                Full stack developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">At PULL4YOU SERVICE S.A.R.L</h4>
              <p>Development and deployment of a Web application that handles the delivery management of the collection of parcels.</p>
              <p>
                The technologies i'm working with : 
              <div className={classes.chip}>
                {mainTec}
              </div>
              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ffa733', borderTop: '5px solid', borderRight: '5px solid', borderBottom: '5px solid'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2020 - Jun 2021"
            iconStyle={{ background: '#CAC0A5', border: '2px solid'}}
            icon={<Icon icon={bookEducationOutline} />}
          >

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

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ffa733', borderTop: '5px solid', borderLeft: '5px solid', borderBottom: '5px solid'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2017 - Jun 2020"
            iconStyle={{ background: '#CAC0A5', border: '2px solid'}}
            icon={<Icon icon={certificateOutline} />}
          >

              <h3 className="vertical-timeline-element-title" style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>DEUST MIP</h3>
              <h4 className="vertical-timeline-element-subtitle">Faculty of science and techenologie of Tangier</h4>
              <p>
                The main programme : 
                <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                  {mainDeu}
                </div>
              </p>

          </VerticalTimelineElement>
        </VerticalTimeline>
        </Box>
    );
}