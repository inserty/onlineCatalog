import React, { FunctionComponent } from "react";
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import { IconButton, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { saveCatalog } from "../../../../core/shared/store/actions/catalog/onlineCatalog.actions";
import productsAPI from "../../services/ProductsAPI";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100vw',
  },
}));

const SearchProduct: FunctionComponent<any> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const isActiveProducts = useSelector<any, any>(state => state?.OnlineCatalog?.isActiveProducts);
  const isPromoProducts = useSelector<any, any>(state => state?.OnlineCatalog?.isPromoProducts);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const searchProducts = (event) => {
    productsAPI.getProductsBySearch(value, isActiveProducts, isPromoProducts).then(data => dispatch(saveCatalog(data)))
  }

  return (
    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
      <OutlinedInput
        id="productSearchInput"
        value={value}
        type={'text'}
        placeholder={'Search'}
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            value.length > 0 && searchProducts(event)
          }
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="productSearchLabel"
              onClick={searchProducts}
              edge="end"
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );

}

export default SearchProduct