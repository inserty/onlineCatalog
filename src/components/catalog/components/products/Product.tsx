import React, { FunctionComponent } from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductButton from "./ProductButton";
import ProductPromo from "./ProductPromo";

interface ProductProps {
    product: any
}

const useStyles = makeStyles({
    productRound: {
        borderRadius: 8
    },
    productImageRound: {
        borderStartStartRadius: 8
    }
});

const Product: FunctionComponent<ProductProps> = (props) => {
    const { product } = props
    const classes = useStyles()

    return (
        <Grid container alignItems="stretch" item sm={12} md={3}>
                <div className={`${classes.productRound} w-full bg-white`}>
                    <div className={`h-40`}>
                        {product.promo && <ProductPromo/>}
                        <ProductImage image={product?.image} title={product?.name}/>
                    </div>
                    <div className={`p-4 inset-x-0 bottom-0`}>
                        <ProductTitle title={product?.name}/>
                        <ProductDescription description={product?.description}/>
                        <ProductRating rating={product?.rating} />
                        <ProductButton product={product} />
                    </div>
                </div>
        </Grid>
    );

}

export default Product