import React, { FunctionComponent } from "react";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const StyledButton = withStyles({
    root: {
      marginTop: 56,
      backgroundColor: '#4460F7',
      borderRadius: 4,
      border: `1px solid #4460F7`,
      width: `100%`,
      height: 48,
      '&:hover': {
        backgroundColor: '#2140E8'
      }
    },
    label: {
      textTransform: 'none',
      color: `#FFFFFF`
    },
  })(Button);

const LoginButton: FunctionComponent<any> = (props) => {

    const onClick = () => {}

    return (
        <div id="loginButton" className={'w-full'}>
            <StyledButton fullWidth variant="outlined" onClick={onClick} size="large" >
                Log in
            </StyledButton>
        </div>
    );

}

export default LoginButton