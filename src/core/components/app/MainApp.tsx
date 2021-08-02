import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { FunctionComponent } from "react";
import theme from './theme';
import { connect } from "react-redux";

const MainApp: FunctionComponent<any> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default connect()(MainApp);