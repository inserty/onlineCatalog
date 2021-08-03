import React, { FunctionComponent } from "react";

import { Button, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  label: {
      marginBottom: 5,
      lineHeight: '16px',
      fontSize: '14px',
      fontWeight: 600,
      marginTop: 16,
      color: "#9194A5"
  }
}));

const ForgotPassword: FunctionComponent<any> = (props) => {
    const classes = useStyles()
    const onClick = () => {}

    return (
        <div className={'w-full'}>
            <Typography className={`${classes.label} underline`}>Forgot password?</Typography>
        </div>
    );

}

export default ForgotPassword