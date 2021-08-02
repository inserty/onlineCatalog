import React, { FunctionComponent } from "react";

import { makeStyles } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    star: {
        color: `#F9A52B`,
        fontSize: 15
    },
  }));
  

const Star: FunctionComponent<any> = (props) => {
    const classes = useStyles()

    return (
       <StarIcon className={classes.star} />
    );

}

export default Star