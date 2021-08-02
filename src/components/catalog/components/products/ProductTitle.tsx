import React, { FunctionComponent } from "react";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainTextSize: {
        fontSize: 18,
        fontWeight: 600
    },
  }));
  

interface ProductTitleProps {
    title: any
}

const ProductTitle: FunctionComponent<ProductTitleProps> = (props) => {
    const { title } = props
    const classes = useStyles()

    return (
        <Typography className={classes.mainTextSize}>{title}</Typography>
    );

}

export default ProductTitle