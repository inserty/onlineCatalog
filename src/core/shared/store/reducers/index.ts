import { combineReducers } from "redux";
import catalogReducer from "./catalog/onlineCatalogReducer";

const createReducer = () =>
    combineReducers({
        OnlineCatalog: catalogReducer
    })

export default createReducer