import React from 'react'
import { motion } from "framer-motion";
import { Box, Divider, Grid } from '@material-ui/core';
// import { makeStyles } from "@material-ui/core/styles";


// const useStyles = makeStyles(theme => ({
//     box: {
//     }
// }));

type SkillPropType = {
	name: string
	detail: string
	icon: string
}

const Skill: React.FC<SkillPropType> = ({
	name,
	detail,
	icon,
}) => {
	return (
        <Grid container alignItems="center">
			<Box p={2}>
				<motion.img style={{ width: 45, height: 45, borderRadius: 15}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={icon} />
			</Box>
            <Divider orientation="vertical" flexItem />
			<Box p={2}>
				<h4>{name}</h4>
				<p>{detail}</p>
			</Box>
        </Grid>
	)
}

export default Skill