import React, { FunctionComponent } from "react";

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    icon: {
      color: '#B9BDCF',
      fontSize: 50
    },
    mainTextSize: {
        fontSize: 18
    },
    secondaryTextSize: {
        fontSize: 14,
        color: '#9194A5'
    },
  }));

const NoProducts: FunctionComponent<any> = () => {
    const classes = useStyles()

    return (
        <div className={`flex justify-center w-full p-10`}>
            <div className={`flex flex-col lg:w-1/2 justify-center items-center bg-white lg:p-20 sm: w-full p-10`}>
                <div className={`m-10`}>
                    <ShoppingBasketIcon className={classes.icon}/>
                </div>

                <div className={`flex flex-col justify-center items-center`}>
                    <Typography className={classes.mainTextSize}>{`Ooops… It’s empty here`}</Typography>
                    <Typography className={classes.secondaryTextSize}>{`There are no products on the list`}</Typography>
                </div>

            </div>
        </div>
    );

}

export default NoProducts