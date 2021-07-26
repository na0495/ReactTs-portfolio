import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    // root: {
    //     width: '100%',
    //     height: '100vh',
    //     overflow: 'hidden',
    //     padding: 0,
    //     margin: 0,
    //     display: 'flex',
    //     justify-content: 'center',
    //     alignItems: 'center',
    //     background: 'linear-gradient(180deg, #d0e, #91f)',
    // },
    container: {
      width: 150,
      height: 150,
      display: 'grid',
      overflow: 'hidden',
      margin: 0,
      listStyle: 'none',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: 15,
      padding: 15,
      background: 'black',
      borderRadius: 50
    },
    item : {
      background: 'white',
      borderRadius: '100%',
    }
    // container {
    //     width: 150,
    //     height: 150,
    //     display: 'grid',
    //     overflow: 'hidden',
    //     margin: 0,
    //     // list-style: none,
    //     // grid-template-columns: repeat(2, 1fr),
    //     // grid-template-rows: repeat(2, 1fr),
    //     gap: '15px',
    //     padding: '15px',
    //     background: 'rgba(255, 255, 255, 0.2)',
    //     border-radius: '50px',
    //   },
      
    // item {
    //     background: 'white',
    //     borderRadius: '100'%,
    //   }
}));



export default function Tech () {
    const classes = useStyles();
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
  return (
    <Card>
        <motion.ul
          className={classes.container}
          variants={container}
          initial="hidden"
          animate="visible"
        >
        {[0, 1, 2, 3].map((index) => (
            <motion.li key={index} className={classes.item} variants={item} />
            ))}
        </motion.ul>
    </Card>
  )
}
