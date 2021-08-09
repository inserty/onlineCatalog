import { makeStyles, TextField, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import BusyIndicator from "../../../core/components/busy/BusyIndicator";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F0F1F5'
    },
    textLogo: {
        lineHeight: '40px',
        fontSize: '30px',
        fontWeight: 600
    },
    inputLabel: {
        marginBottom: 5,
        lineHeight: '16px',
        fontSize: '14px',
        fontWeight: 600,
        marginTop: 29
    }
}));

const LoginForm: FunctionComponent<any> = () => {
  const classes = useStyles();

  return (
    <div className={`flex flex-col w-full lg:mt-40 md:mt-20 sm:mt-20`}>
        <BusyIndicator loading={false}>
            <div>
                <Typography className={`${classes.textLogo}`}>Login</Typography>
                <div className={`flex flex-col w-full`}>
                    <Typography className={`${classes.inputLabel}`}>Username</Typography>
                    <TextField id="login" variant="outlined" />
                </div>
                <div className={`flex flex-col w-full`}>
                <Typography className={`${classes.inputLabel}`}>Password</Typography>
                    <TextField type={'Password'} id="password" variant="outlined" />
                </div>
            </div>
        </BusyIndicator>
    </div>
  );
}

export default LoginForm