import React, { FunctionComponent } from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductButton from "./ProductButton";

const useStyles = makeStyles((theme) => ({

  }));
  

interface ProductProps {
    product: any
}

const Product: FunctionComponent<ProductProps> = (props) => {
    const { product } = props
    const classes = useStyles()

    return (
        <Grid container alignItems="stretch" item xs={12} md={3}>
            <Paper className={`w-full`} elevation={0}>
                <>
                    <div className={`h-40`}>
                        <ProductImage image={product?.image} title={product?.name}/>
                    </div>
                    <div className={`p-4 inset-x-0 bottom-0`}>
                        <ProductTitle title={product?.name}/>
                        <ProductDescription description={product?.description}/>
                        <ProductRating rating={product?.rating} />
                        <ProductButton product={product} />
                    </div>
                </>
            </Paper>
        </Grid>
    );

}

export default Product