import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './core/shared/store/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('root'));


// @ts-ignore
if (window.Cypress) {
    // @ts-ignore
    window.__store__ = store;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
