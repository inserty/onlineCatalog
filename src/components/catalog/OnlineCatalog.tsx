import { makeStyles, Paper } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import PageHeader from "./header/PageHeader";
import clsx from 'clsx';
import ProductsList from "./components/products/ProductsList";
import Paginations from "./components/pagination/Paginations";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F2F2F2'
  },
}));

const OnlineCatalog: FunctionComponent<any> = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, `flex flex-col`)}>
        <Paper className={`flex flex-col`} elevation={0}>
          <PageHeader/>
        </Paper>

        <ProductsList/>
        <Paginations/>
    </div>
  );
}

export default OnlineCatalog