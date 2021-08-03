import { makeStyles, Paper, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import clsx from 'clsx';
import ReactLogo from './backgorund.svg';
import LoginForm from "./componenets/LoginForm";
import LoginButton from "./componenets/buttons/LoginButton";
import ForgotPassword from "./componenets/buttons/ForgotPassword";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFFFFF'
    },
    textLogo: {
        lineHeight: '40px',
        fontSize: '24px',
        fontWeight: 600
    },
    background: {
        [theme.breakpoints.down('md')]: {
            "display": "none"
        }
    },
    login: {
        margin: 32,
        [theme.breakpoints.down('md')]: {
            margin: 10
        }
    }
}));

const Login: FunctionComponent<any> = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, `flex flex-col`)}>
        <div className={'flex w-full'}>
            <div className={`${classes.background} w-1/3`}>
                <img src={ReactLogo} alt="React Logo" />
            </div>

            <div className={`${classes.login} lg:w-1/3 md: w-full sm: w-full`}>
                <div className={'flex flex-col'}>
                    <Typography className={`${classes.textLogo}`}>join.tsh.io</Typography>
                    <LoginForm/>
                    <LoginButton/>
                    <ForgotPassword/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login