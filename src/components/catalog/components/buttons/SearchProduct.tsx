import React, { FunctionComponent } from "react";
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { } from "../../../../core/shared/store/actions/catalog/onlineCatalog.actions";


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

  const addTask = () => { }
  return (
    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
      <OutlinedInput
        id="productSearchInput"
        type={'text'}
        placeholder={'Search'}
        onChange={() => {}}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="productSearchLabel"
              onClick={() => {}}
              // onMouseDown={}
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