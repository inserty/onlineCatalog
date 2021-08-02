import React, { FunctionComponent } from "react";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const useStyles = makeStyles((theme) => ({
    star: {
        fontSize: 15
    },
  }));
  
const EmptyStar: FunctionComponent<any> = (props) => {
    const classes = useStyles()

    return (
       <StarOutlineIcon className={classes.star} />
    );

}

export default EmptyStar