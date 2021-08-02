import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from "redux";
import createReducer from './reducers/index'



const composeEnhancers = process.env.NODE_ENV !== 'production' && window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enchancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(createReducer(), enchancer) as any

export default store