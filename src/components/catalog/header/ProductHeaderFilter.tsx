import React, { FunctionComponent } from "react";
import { FormGroup } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import FilterProducts from "../components/buttons/FilterProducts";

const ProductHeaderFilter: FunctionComponent<any> = () => {
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FilterProducts/>
            </FormGroup>
        </FormControl>
    );
}

export default ProductHeaderFilter