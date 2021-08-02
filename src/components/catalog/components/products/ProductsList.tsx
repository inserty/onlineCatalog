import React, { FunctionComponent } from "react";

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { isFetching, saveCatalog } from "../../../../core/shared/store/actions/catalog/onlineCatalog.actions";
import productsAPI from "../../services/ProductsAPI";
import NoProducts from "./NoProducts";
import Product from "./Product";
import { Paper } from "@material-ui/core";
import BusyIndicator from "../../../../core/components/busy/BusyIndicator";
import ProductDetails from "./productDetailsDialog/ProductDetails";

const useStyles = makeStyles((theme) => ({
   
  }));

const ProductsList: FunctionComponent<any> = () => {
    const products = useSelector<any, any>(state => state?.OnlineCatalog?.products?.items || []);
    const isFetching = useSelector<any, any>(state => state?.OnlineCatalog?.isFetching);

    const dispatch = useDispatch();

    React.useEffect(() => {
        productsAPI.getProducts().then(data => dispatch(saveCatalog(data)))
    }, [])

    return (
        <BusyIndicator loading={isFetching}>
            {products?.length > 0 ?
                <>
                    <div className={`flex justify-center w-full p-20`}>
                        <Grid container alignItems="stretch" spacing={6}>
                            {
                                products.map(product => {
                                    return <Product key={product?.id} product={product} />
                                })
                            }
                        </Grid>
                    </div>
                    <ProductDetails/>
                </>
            : <NoProducts />}
        </BusyIndicator>
    );

}

export default ProductsList