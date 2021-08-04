import React, { FunctionComponent } from "react";
import clsx from 'clsx';

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    bg: (props:any) => ({
        backgroundImage: `url(${props.image})`,
        height: '100%',
        width: '100%',
        borderStartEndRadius: 8,
        borderStartStartRadius: 8
    })
});

interface ProductImageProps {
    image: any,
    title: any
}

const ProductImage: FunctionComponent<ProductImageProps> = (props) => {
    const { image, title } = props
    const classes = useStyles(props)

    return (
        <div className={clsx(classes.bg, "bg-cover bg-center w-full")}>
            <></>
        </div>
    );

}

export default ProductImage