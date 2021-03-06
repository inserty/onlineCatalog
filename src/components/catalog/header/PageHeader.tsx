import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import { AddAlarm } from "@material-ui/icons";
import SearchProduct from "../components/buttons/SearchProduct";
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from "../components/buttons/LoginButton";
import ProductHeaderFilter from "./ProductHeaderFilter";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(90deg, #af6132 30%, #b95b21 90%)',
        boxShadow: '0 4px 5px 2px rgba(255, 105, 135, .3)',
        borderBottom: 2
    },
    logo: {
        lineHeight: '40px',
        fontSize: '24px',
        fontWeight: 600
    }
}));

const PageHeader: FunctionComponent<any> = () => {
    const classes = useStyles();
    return (
        <>
            <div className={'items-center p-10 w-full lg:flex sm: hidden'}>
                <div className={'w-1/6'}>
                    <Typography className={`${classes.logo}`}>join.tsh.io</Typography>
                </div>

                <div className={'flex items-center w-3/4'}>

                    <div className={'flex items-center w-1/2'}>
                        <SearchProduct />
                    </div>

                    <div className={'flex items-center w-1/2'}>
                        <ProductHeaderFilter />
                    </div>

                </div>

                <div>
                    <LoginButton/>
                </div>
            </div>

            <div className={'items-center p-10 lg:hidden sm: flex flex-col'}>
                <div className={`flex flex-row w-full justify-between m-4`}>
                    <Typography className={`${classes.logo}`}>join.tsh.io</Typography>
                    <LoginButton/>
                </div>
                <div className={'flex items-center w-full'}>
                    <SearchProduct />
                </div>

                <div className={'flex items-center w-full'}>
                    <ProductHeaderFilter />
                </div>
            </div>
        </>
    );

}

export default PageHeader