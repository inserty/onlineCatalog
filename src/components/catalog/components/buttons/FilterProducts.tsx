import React, { FunctionComponent } from "react";

import { useDispatch } from "react-redux";
import { FormControlLabel } from "@material-ui/core";
import ProductCheckBox from "./ProductCheckBox";
import productsAPI from "../../services/ProductsAPI";
import { saveCatalog, isActiveProducts, isPromoProducts } from "../../../../core/shared/store/actions/catalog/onlineCatalog.actions";

const FilterProducts: FunctionComponent<any> = (props) => {
    const dispatch = useDispatch();

    const [active, setActive] = React.useState(false);
    const [promo, setPromo] = React.useState(false);

    const activeHandleChange = (event) => {
        productsAPI.getFilteredProducts(event.target.checked, promo).then(data => dispatch(saveCatalog(data)))
        dispatch(isActiveProducts(event.target.checked))
        setActive(event.target.checked);
    };

    const promoHandleChange = (event) => {
        productsAPI.getFilteredProducts(active, event.target.checked).then(data => dispatch(saveCatalog(data)))
        dispatch(isPromoProducts(event.target.checked))
        setPromo(event.target.checked);
    };

    return (
        <>
            <div>
                <FormControlLabel
                    value="end"
                    control={<ProductCheckBox onChange={activeHandleChange}/>}
                    label="Active"
                    labelPlacement="end"
                />
            </div>
            <div>
                <FormControlLabel
                    value="end"
                    control={<ProductCheckBox onChange={promoHandleChange}/>}
                    label="Promo"
                    labelPlacement="end"
                />
            </div>
        </>
    );

}

export default FilterProducts