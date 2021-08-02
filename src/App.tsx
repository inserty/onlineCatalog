import React, { FunctionComponent } from "react";
import OnlineCatalog from "./components/catalog/OnlineCatalog";
import MainApp from './core/components/app/MainApp' 

const App: FunctionComponent<any> = () => {
    return (
            <MainApp>
                <OnlineCatalog />
            </MainApp>
    );
}

export default App;