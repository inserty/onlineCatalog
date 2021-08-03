import React, { FunctionComponent } from "react";
import OnlineCatalog from "./components/catalog/OnlineCatalog";
import Login from "./components/login/Login";
import MainApp from './core/components/app/MainApp' 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App: FunctionComponent<any> = () => {
    return (
            <MainApp>
                 <Router>
                    <Switch>
                        <Route exact path="/">
                            <OnlineCatalog />
                        </Route>

                        <Route path="/login">
                            <Login/>
                        </Route>
                    </Switch>
                </Router>
            </MainApp>
    );
}

export default App;