import React, { FunctionComponent } from "react";

import { Button, makeStyles, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { saveSelectedProduct } from "../../../../core/shared/store/actions/catalog/onlineCatalog.actions";

const ActiveProduct = withStyles({
    root: {
      backgroundColor: '#4460F7',
      borderRadius: 4,
      border: `1px solid #4460F7`,
      width: `100%`,
      '&:hover': {
        backgroundColor: '#2140E8'
      }
    },
    label: {
      textTransform: 'none',
      color: `#FFFFFF`
    }
  })(Button);

const NoActiveProduct = withStyles({
    root: {
        background: '#9194A5',
        width: `100%`
    },
    label: {
        textTransform: 'none',
        color: `#FFFFFF`
    },
})(Button);

interface ProductButtonProps {
    product: any
}

const ProductButton: FunctionComponent<any> = (props) => {
    const { product } = props
    const dispatch = useDispatch()

    return (
        <div>
            {product.active ? 
                <>
                    <ActiveProduct variant="outlined" size="large" onClick={() => dispatch(saveSelectedProduct(product))}>
                        Show details
                    </ActiveProduct>
                </>
            :
                <NoActiveProduct disabled variant="outlined" size="large" >
                    Unavailable
                </NoActiveProduct>
            }
        </div>
    );

}

export default ProductButton