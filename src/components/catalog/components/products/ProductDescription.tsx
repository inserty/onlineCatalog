import React, { FunctionComponent } from "react";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainTextSize: {
        fontSize: 14,
        color: `#9194A5`
    },
  }));
  

interface ProductDescriptionProps {
    description: any
}

const ProductDescription: FunctionComponent<ProductDescriptionProps> = (props) => {
    const { description } = props
    const classes = useStyles()

    return (
        <div className={`h-14`}>
            <Typography className={classes.mainTextSize}>{description}</Typography>
        </div>
    );

}

export default ProductDescription