import React, { FunctionComponent } from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    bg: (props:any) => ({
        backgroundColor: `#F9A52B`,
        width: 75,
        height: 24
    }),
    text: {
        color: "#FFFFFF",
        lineHeight: 16,
        fontSize: 14
    }
});

const ProductPromo: FunctionComponent<any> = (props) => {
    const classes = useStyles(props)

    return (
        <div className={`${classes.bg} flex justify-center items-center absolute mt-4`}>
            <Typography className={classes.text} >Promo</Typography>
        </div>
    );

}

export default ProductPromo