import React, { FunctionComponent } from "react";

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

    const onClick = () => {}

    return (
        <div>
            <StyledButton variant="outlined" onClick={onClick} size="large" >
                Log in
            </StyledButton>
        </div>
    );

}

export default LoginButton