import React, { FunctionComponent } from "react";

import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const StyledButton = withStyles({
    root: {
      background: '#FFFFFF',
      borderRadius: 4,
      border: `1px solid #4460F7`
    },
    label: {
      textTransform: 'none',
      color: `#4460F7`
    },
  })(Button);

const LoginButton: FunctionComponent<any> = (props) => {
    let history = useHistory();
    
    const onClick = () => {
      history.push("/login");
    }

    return (
        <div id="loginButton">
            <StyledButton variant="outlined" onClick={onClick} size="large" >
                Log in
            </StyledButton>
        </div>
    );

}

export default LoginButton